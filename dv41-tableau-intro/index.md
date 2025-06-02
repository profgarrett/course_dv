
# Introduction to Tableau

See Datacamp *Introduction to Tableau*

## Installation

Before class, install Tableau on your computer:

- Download the [latest version of Tableau Desktop](https://www.tableau.com/tft/activation)
- Click on the link above and select “Download Tableau Desktop”. On the form, enter your school email address for Business E-mail and enter the name of your school for Organization.
- Activate with your product key:  *See eCampus for key*
- Already have a copy of Tableau Desktop installed? Update your license in the application: Help menu → Manage Product Keys. Make sure that you are fully up to date with the latest version.

## Interface

- Data pane for looking at data
- Sheets/pages
- Canvas for your vis
- Filters to limit (either upper-left or right panel)
- Mark cards are used to change how data is displayed
- Buttons
  - Undo/Back 
  - *Show me* button
  - Clear sheet
- Control+click to copy a pill

### Saving

Be careful how you save your file! Normal Tableau files don't include the data. You must save as a *packaged workbook* for any submitted work in this class.

We share our data with Tableau Public. Later in the course, when we use private data, we will use our private Tableau group. 

## Getting data

- Connect to Excel or flat file (csv)
  - Excel: multiple-sheets + formatting
  - CSV: comma-separated-values, no format or sheets.
- Rename fields
- Change datatype of a field

We can create a calculated field in Tableau, similar to an Excel function.

- Arithmetic (PEMDAS)
- ROUND function
- Ratios with one value divided by another

### Terms

- Data types
  - `Text`
  - `Integers` are number without a decimal point value
  - `Floats`/`doubles` include information past the decimal point
  - `Money` is a type in some databases. It is an integer that records the number of pennies, which solves some problems with doubles/floats
  - `Boolean` are True or False values
  - `Dates`
    - Dates can be either discrete or continuous. While they default to continuous, this may not look like you want. 
    - You can pick if you want slices (like Months) containing a year or being independent. If you want just the month, make the pill blue (discrete). If you want the month and the year, then make the pill green (continuous).
- Dimensions
  - `Discrete` / blue pills are discrete categories (like Id number, neighborhood)
  - `Continuous` / green pills are continuous ranges (like room price)
- Measures
  - Functions applied to data
  - `Count`, `sum`, `max`, `min`, etc...
  - Average can have multiple meanings
    - `Mode` is the most common item
    - `Mean` is sum / count
    - `Median` is middle item when sorted large/small
  - Can be applied to continuous (like average price) or discrete (like count)
  - We commonly use discrete measures and continuous dimensions.

## Chart Types

### Heat Map

- Best for
  - 2 dimensions
  - 1 measure
- Pre-attentive attributes
  - Color (use sequential and diverging scales, not categorical)
- Limits
  - Color has limited accuracy
  - Hard to visualize too many numbers
- Basic features
  - Sort by dimension name or by measure value

### Bar

- Best for
  - 0-1 dimension
  - 1 measure
- Pre-attentive attributes
  - Length (either stacked or at zero)
  - Color (either categorical, sequential, or diverging)
- Limits
  - Best for n<10
  - Hard to visualize very precise data (use histogram instead)
- Basic features
  - Sort by dimension name or by measure value
  
### Histogram

- Best for
  - No dimensions
  - 1 measure
- Pre-attentive attributes
  - Length (either stacked or at zero)
  - Color (not as useful, but you can pick either sequential or diverging)
- Limits
  - Best for n>10
  - Best for very precise data
- Basic features
  - Set a custom bin size
- Advanced features
  - Remove outliers

### Scatterplot

- Best for
  - 2 *numeric* dimensions
  - 0-1 measure (aggregated or disaggregated)
- Pre-attentive attributes
  - Color (best for n<=5 categorical)
  - Position on a common scale (x, y)
  - Size
- Limits
  - Best for n>100
  - Best for a cause (x) and effect (y)
- Basic features
  - Show either aggregated or disaggregated data
- Advanced features
  - Trend lines, reference lines


### Boxplot

- Best for
  - 1 dimension
  - 1 disaggregated measure 
- Pre-attentive attributes
  - Position on a common scale
- Limits
  - Best for n>100
  - Best for problems with too much data to see individual points, requiring quartiles to better understand.
- Basic features
  - Change bin size

Understand the difference between showing aggregated and disaggregated information. Look at your points and click `view data` to see what you are viewing. Experiment with different options to get a display that works for your dataset.


### Line

- Best for
  - 1 date
  - 1 measure 
- Pre-attentive attributes
  - Position on a common scale
- Limits
  - Requires date information!
- Advanced features
  - Custom date scales

### Combo 


- Best for
  - 2 measures (one must be a date!)
  - 0-1 measures
- Process
  - Add 2 measures to row. Then, go to marks and change one type of bar. Then, right-lick the right-pill and change to a dual axis.
- Pre-attentive attributes
  - Position on a common scale
- Limits
  - Requires date information!
- Advanced features
  - Synchronize axis


### Map (part 1/2)

Understand the limits of showing values with geographic size. Know the difference between showing data as a point, or as color area.

- Best for
  - Geographic data (point or region)
  - 1-2 measures
- Pre-attentive attributes
  - Position on a common scale
  - Color
  - Area
- Limits
  - Must categorize your data as geographic
- Advanced features
  - Dual axis

Understand why you don't want to use size for negative numbers

Understand the data type for geography data! This includes zip, city, state, longitude/latitude etc..


## Other Features

### Tooltip

- Add fields to a tooltip by dragging a pill to that button in the marks menu.
- Know how to edit the text and formatting by clicking on the button in the marks menu.

### Pivot

Pivot columns to turn wide data into tall data.

### Join

Understand how to join multiple tables on a common key value.

### Filter / Sorting

Understand the different levels of filtering

- `Extraction filters`/`Data source` are used on the dataset. We don't use these options, as we generally will pull from csv files in this course. They are typically used when we give parameters to a query from a database.
- `Context` is used when clicking on items in a dashboard. We will see this more when creating dashboards later in the course.
- `Dimension`/`Measure` can be filtered on a row-level
- `Aggregate` filters are applied to the *result* of a function on a measure. For example, show only regions with `SUM(sales)` over $1 million.

Generally you should focus on two types of filters: `row` and `aggregate`. Use a row-level to filter on a single's row value. Use aggregate when we want to look at the result of SUM/COUNT/etc... These correspond to SQL's WHERE and HAVING clauses. 


Add a filter by:

- Right-clicking on a cell and clicking show only or exclude.
- Drag/drop a field to the filter pane
  - Use `all values` to filter on the row-level
  - Use a function (such as `SUM`) when you want to filter on an aggregate measure.

Filter options:

- TOP 
- Non-null
- Show as (right-click on a shown filter)
  - Single value (dropdown, list, slider)
  - Multiple values (list, dropdown, custom list, wildcard)
  - Show as floating

### Sort

- Use sort button on button bar to sort by values
- Use a-z button on chart to sort by a field name
- Right-click on a pill to get the `Sort` menu. You can pick from original data, or choose an alternative sort option.

Use Pages for a different style of filter

## Dashboards / Stories

- Dashboards
  - Contain multiple sheets on a single page
  - Format with titles, and font
  - Add a filter
    - On the right, floating, or by clicking on a chart
- Stories
  - Contain multiple sheets on multiple pages
  
