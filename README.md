README file containing:
Setup instructions
Assumptions made
Architectural decisions
Improvements if given more time

## Architectural Decisions

### Why Redux over local state?
Filters are stored in Redux store instead of component useState.
This means when I navigate to a product detail page and hits 
Back the filters are exactly as I left them, because Redux 
state survives navigation and Local useState would reset on unmount.

