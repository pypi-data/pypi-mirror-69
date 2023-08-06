import warnings
from typing import List

import torch
import torch.nn as nn

from ._buddy_include._interfaces._checkpointing import _BuddyCheckpointing
from ._buddy_include._interfaces._logging import _BuddyLogging
from ._buddy_include._interfaces._metadata import _BuddyMetadata
from ._buddy_include._interfaces._optimizer import _BuddyOptimizer


class Buddy(
    _BuddyCheckpointing, _BuddyOptimizer, _BuddyLogging, _BuddyMetadata,
):

    """Buddy is a model manager that abstracts away PyTorch boilerplate.
    Buddy helps with...
    - Creating/using/managing optimizers,
    - Checkpointing (models + optimizers),
    - Namespaced/scoped Tensorboard logging,
    - Saving human-readable metadata files.

    Args:
        experiment_name (str): Name for the current model/experiment.
        model (torch.nn.Module): PyTorch model to work with.

    Keyword Args:
        checkpoint_dir (str, optional): Path to save checkpoints into.
            Defaults to `"checkpoints"`.
        checkpoint_max_to_keep (int, optional): Number of auto-saved
            checkpoints to keep. Set to `None` to keep all. Defaults to `5`.
        metadata_dir (str, optional): Path to save metadata YAML files into.
            Defaults to `"metadata"`.
        log_dir (str, optional): Path to save Tensorboard log files into.
            Defaults to `"logs"`.
        optimizer_type (str, optional): Optimizer type to use: `"adam"` or
            `"adadelta"`. Defaults to `"adam"`.
        optimizer_checkpoint_interval (float, optional): How often to
            auto-checkpoint, as an interval in seconds. Time is computed from
            the first call to minimize(). Set to 0 to disable. Defaults to 300.
        verbose (bool, optional): Flag for toggling debug messages. Defaults to
            `True`.
    """

    def __init__(
        self,
        experiment_name: str,
        model: nn.Module,
        *,
        checkpoint_dir: str = "checkpoints",
        checkpoint_max_to_keep: int = 5,
        metadata_dir: str = "metadata",
        log_dir: str = "logs",
        optimizer_type: str = "adam",
        optimizer_checkpoint_interval: float = 300,
        optimizer_names: List[str] = None,  # Deprecated!
        verbose: bool = True,
    ) -> None:
        """Constructor
        """
        # Validate and assign core parameters.
        assert type(experiment_name) == str
        assert isinstance(model, nn.Module)
        assert type(verbose) == bool

        self._experiment_name = experiment_name
        self._model = model
        self._verbose = True

        # Use GPU for training if available.
        if torch.cuda.is_available():
            self._device = torch.device("cuda")
            model.cuda()
        else:
            self._device = torch.device("cpu")
        self._print("Using device:", self._device)

        # Call constructors for each of our interfaces.
        # Sets up checkpointing, metadata, logging, and optimization-specific state.
        #
        # State within each interface should be encapsulated.
        _BuddyCheckpointing.__init__(self, checkpoint_dir, checkpoint_max_to_keep)
        _BuddyMetadata.__init__(self, metadata_dir)
        _BuddyLogging.__init__(self, log_dir)
        _BuddyOptimizer.__init__(self, optimizer_type, optimizer_checkpoint_interval)

        if optimizer_names is not None:
            warnings.warn(
                "The optimizer_names field is no longer needed, and will be "
                "removed in a future version!",
                DeprecationWarning,
                stacklevel=1,
            )

        # Print available checkpoints
        self._print("Available checkpoint labels:", self.checkpoint_labels)

    # Shared functions
    @property
    def device(self) -> torch.device:
        """Read-only interface for the active torch device.
        """
        return self._device

    def _print(self, *args, **kwargs) -> None:
        """Private helper for logging.
        """
        # Only print in verbose mode
        if self._verbose:
            arglist = list(args)
            arglist[0] = f"[buddy-{self._experiment_name}] {args[0]}"
            print(*arglist, **kwargs)
