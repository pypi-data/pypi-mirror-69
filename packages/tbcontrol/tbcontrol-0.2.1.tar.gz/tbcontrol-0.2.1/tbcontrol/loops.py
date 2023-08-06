"""Utility functions for handling feedback loop calculations"""


def feedback(forward, backward=1):
    """Calculate closed loop transfer function

         +     ┌────────┐
      ────>o──>│forward ├────┬──>
          -↑   └────────┘    │
           │   ┌────────┐    │
           └───┤backward│<───┘
               └────────┘
    """
    loop = forward*backward
    return forward/(1 + loop)
