# GeauxSpecialist.com Component Development Prompt

## Component Requirements

I need assistance developing the following component for GeauxSpecialist.com:

**Component Name**: [COMPONENT_NAME]

**Component Purpose**: [Brief description of what this component does]

**Location in Project**: components/[DIRECTORY]/[COMPONENT_NAME].js

## Component Specifications

### Functional Requirements
- [REQUIREMENT 1]
- [REQUIREMENT 2]
- [REQUIREMENT 3]

### Props Interface
```javascript
{
  // Required props
  prop1: PropTypes.string.isRequired,  // Description of prop1
  prop2: PropTypes.number.isRequired,  // Description of prop2
  
  // Optional props with default values
  prop3: PropTypes.bool,               // Description of prop3
  prop4: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }))                                  // Description of prop4
}
```

### State Management
- [STATE_VARIABLE_1]: Tracks [DESCRIPTION]
- [STATE_VARIABLE_2]: Manages [DESCRIPTION]

### Event Handlers
- `handle[EVENT_NAME]`: Triggered when [DESCRIPTION]
- `handle[EVENT_NAME]`: Processes [DESCRIPTION]

## Design Specifications

### Visual Requirements
- Color scheme: [COLORS]
- Typography: [FONT_SPECS]
- Responsive behavior: [BREAKPOINT_BEHAVIOR]
- Animation requirements: [ANIMATION_SPECS]

### Accessibility Requirements
- Keyboard navigation: [REQUIREMENTS]
- Screen reader compatibility: [REQUIREMENTS]
- ARIA attributes: [REQUIREMENTS]
- Focus management: [REQUIREMENTS]

## Integration Context

### Parent Components
- Will be used within: [PARENT_COMPONENT(S)]
- Receives data from: [DATA_SOURCE]

### Child Components
- Contains/renders: [CHILD_COMPONENT(S)]
- Passes data to: [DATA_DESTINATION(S)]

## Technical Constraints

### Performance Considerations
- Rendering optimization strategies
- Memoization requirements
- Data fetching approach

### Browser/Device Support
- Target browsers: [BROWSERS]
- Mobile responsiveness requirements: [REQUIREMENTS]

## Testing Approach

### Unit Tests
- Test cases for [FUNCTIONALITY_1]
- Test cases for [FUNCTIONALITY_2]

### Integration Tests
- Test scenarios with [COMPONENT_1]
- Test scenarios with [COMPONENT_2]

## Example Usage

```jsx
<ComponentName
  prop1="example value"
  prop2={42}
  prop3={true}
  prop4={[{ id: "1", name: "Example" }]}
  onSomeEvent={handleEvent}
/>
```

## Additional Notes
[Any other relevant information or context]

---

Please provide a complete implementation with:
1. Component code with proper TypeScript/PropTypes
2. Associated CSS module
3. Unit tests
4. Usage examples
5. Documentation of any complex logic or edge cases