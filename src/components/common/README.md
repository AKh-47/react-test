# Available Components:

## Brand
#### Exports: 
- `BrandLogo`
- `BrandName`

### - BrandLogo
An img block with the brand logo.

#### Available Props:
- width (`string`): Required.
- height (`string`): Optional, defaults to width.
- margin (`string`): Optional.
- padding (`string`): Optional.

### - BrandName
An img block with the brand name.

#### Available Props:
- width (`string`): Required.
- height (`string`): Optional, defaults to width.
- margin (`string`): Optional.
- padding (`string`): Optional.

## Button
#### Exports: 
- `Button`

### - Button
40px tall button with a solid colored background and white text.

#### Available Props:
- height (`string`): Optional, defaults to 40px.
- width (`string`): Optional.
- margin (`string`): Optional.
- padding (`string`): Optional.
- color (`string`): Optional.

#### Styles:
- bold (`bool`): Children have font weight 700.
- wide (`bool`): Children have line spacing 0.08em;
- outline (`bool`): Clear background with colored border and text.
- transparent (`bool`): Completely clear with colored text.
- light (`bool`): Same as default but the background color is lighter.

## Dropdown
#### Exports: 
- `DropdownContainer`
- `DropdownItem`
- `DropdownButton`

### - DropdownContainer
Wrapper for contents of the dropdown.

#### Available Props:
- open (`bool`): Required. Controlled by the parent's state.

### - DropdownItem
Static list items in the dropdown.

### - DropdownButton
Clickable list items in the dropdown, 40px tall.

## Form
#### Exports: 
- `Form`
- `FormTitle`
- `FormRow`
- `FormCol`

### - Form
Styled form container tag.

#### Available Props:
- invisible (`bool`): Optional. Unstyled form tag that inherits parent's styles.

### - FormTitle
Styled form title/header.

### - FormRow
Styled form row component.

#### Available Props:
Everything accepted by `react-grid-system`'s Row component.

### - FormCol
Styled form column component.

#### Available Props:
Everything accepted by `react-grid-system`'s Col component.

## Hyperlink
#### Exports: 
- `Hyperlink`

### - Hyperlink
Styled, accent-colored anchor tag.

#### Styles:
- secondary (`bool`): Use gray1 instead of accent.

## Img
#### Exports: 
- `Img`

### - Img
Styled image tag with dimensions and alignment attributes as props.

#### Available Props:
- width (`string`): Required.
- height (`string`): Optional, defaults to width.
- margin (`string`): Optional.
- padding (`string`): Optional.
- cursor (`string`): Optional.
- radius (`string`): Optional, sets the border-radius attribute.

## Input
#### Exports: 
- `Input`
- `Label`
- `Checkbox`

### - Input
Styled input tag for text-based inputs.

#### Available Props:
- width (`string`): Optional.
- height (`string`): Optional, defaults to 40px.
- margin (`string`): Optional, defaults to (12px 0 12px 0).

### - InputSelect
Styled select tag with options.

#### Available Props:
Everything required & accepted by `react-select`'s Select component, additionally  
- width (`string`): Optional.
- height (`string`): Optional, defaults to 40px.
- margin (`string`): Optional, defaults to (12px 0 12px 0).

### - Label
Styled label tag. 

#### Available Props:
- accent (`bool`): Optional, sets font color to theme accent.

### - Checkbox
Styled input tag for checkbox inputs. 

#### Available Props:
- height (`string`): Optional, defaults to 40px.
- margin (`string`): Optional, defaults to (12px 8px 12px 0).

# Adding New Components:
Make sure all the components in the module file/directory are named exports.  
Export them all again from `index.js`.
