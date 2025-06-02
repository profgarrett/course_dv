
# Analyzing data in Tableau
 
See Datacamp *Analyzing data in Tableau*

## Data Fixes

- Dimensions v. Measures
  - Know how to drag a field from the measures list to the dimension list.
- Default properties
  - Set default color, number format, and aggregation
- Date can be *either* continuous or discrete
  - *Continuous* groups by time period (i.e, all Jan 2020, Feb 2020, March 2020, ..., Jan 2021, Feb 2021, etc...)
  - *Discrete* splits into groups (i.e., Jan 2020 & 2021, Feb 2020-2021, March 2020-2021)
  - Suggested using lines for continuous and bars for discrete dates
- Group data
  - Group using Tableau's features
  - Group using SQL / joins and a sub-table
  - Select map dots and group them. 
    - Add/Remove a point to an  existing group 
    - Rename groups
    - Edit the group field
  - Create a custom group sort

### Advanced fixes

- Connect multiple tables with relationship (including a self-join)
- Pivot wide to tall data
- Set a field to link together two different data sources by clicking on the linking field

### Calculation
  
- Create a new calculated field with math (i.e., hours to minutes)
  - Basic ratios (x / y)
  - `DATEDIFF()`
  - `DATEPART()`
  - `makeDATE()`
  - `IF X = 1 THEN 1 ELSE 2 END`
  - `ZN()`
  - `SUM()`, `MEDIAN()`, `AVG()`
- Bin
  - Create a bin size
- Create a quick table calculation 
  - Function (i.e., running total, difference, percent of total)
  - Direction (across, down etc..)
  - Compare against first, previous, etc...
  - Show a field as a percent of the total row or column

### Parameters / Sets

- Set
  - Define a subset and show a division between IN and OUT. You can only use for 2 settings, either TRUE or FALSE. Use a group for more options.
  - Use a set to highlight color, rename, etc..
- Parameter
  - Create a parameter, and a custom range
  - Add a filter using the parameter
  - Use a parameter in a calculated field
  

## Chart Display Options

- Text
  - Change size / font /color for a cell
- Axis
  - Hide an axis
  - Label
    - Font, size, alignment, and rotation
    - Marks style
    - Set interval, min, and max values
    - Format date values
  - Data
    - Group dimensions and edit the grouped field
    - Relabel a dimension value using an alias
    - Exclude data (by range, null values)
- Fit to entire view
- Tooltip
  - Add measure / dimension field to a tooltip
  - Edit font and layout of a tooltip

## Maps (part 2)


Maps rely on long/lat. These can be in a dataset, or calculated by Tableau.

- Data
  - Understand the difference between long/lat coordinates provided in the dataset, versus those created by Tableau
  - Understand why you can't do fill for long/lat, but you can for generated lat/long geographic data
- Create the 4 different types
  - Fill
  - Point
  - Density (includes opacity)
    - Set color / intensity
  - Dual axis
- Zoom
  - Zoom in, out, and pan (`shift` to pan)
  - Search
- Layers
  - Color scheme
  - Set background layers (including Tableau's built-in data layers)
  - Add/remove roads
  
## Other key skills

- Use filters to dynamically update charts in a dashboard
- Use Bookmarks
  - Dynamic filter
  - Go to page

- Understand distortions
  - Non-zero axis
  - Areas not matching value
  - Non-proportional values
  - Bad color scales
  - Bad grouping