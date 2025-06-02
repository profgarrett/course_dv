<script src="/course_dv/presentation.js"></script>

# Understand your data

## Outcomes

- Understand data **values** 
	- Look for missing values, outliers, codings, etc...
	- Identify type:
		- String or number (integer v. decimal)
		- Continuous v. discrete
- Understand data **structure**
	- Cross-sectional data
	- Longitudinal data
	- Roll-up data, where rows are both details and summary roll-ups (often found in government data)
	- Wide v. tall data



# Data Values

We begin by inspecting individual cells. There are several questions we need to understand about the data before trying to visualize it.

---

### a. **Missing Values**

Missing values are entries where data is not available. These can appear as `NULL`, `NaN`, empty strings (`""`), or even as placeholder text like `"N/A"` or `-999`.

#### Examples:

- In a dataset of students’ test scores, a missing value might indicate a student who didn’t take the test.
- A survey might have skipped questions, resulting in empty fields. 

**Why it matters**: Missing values can distort averages, correlations, and trends. 
You may need to remove or impute (fill in) these values before visualization.

---

### b. **Outliers**

Outliers are data points that fall far outside the range of the majority of values.
#### Examples:

- A person reporting an age of `150` in a demographic dataset.
- A customer spending `$1,000,000` in a store where the average is `$200`.

**Why it matters**: Outliers can skew visualizations such as bar charts and histograms, making it hard to see patterns among the majority of the data.

---

### c. **Codings and Inconsistent Formats**

Codings refer to how values are recorded—whether consistent or not.
#### Examples:

- Gender might be recorded as `M/F`, `Male/Female`, or even `0/1`.
- Dates might appear as `01/02/2023`, `2023-02-01`, or `February 1, 2023`.

**Why it matters**: Inconsistent codings lead to improper grouping and inaccurate visual aggregation. Standardizing these formats is essential.

---

## 2. Identifying the Type of Each Field

Properly classifying the type of each field helps determine appropriate visual encodings (e.g., bar charts for categorical data, scatter plots for continuous numeric data).

### a. **String or Number**

This is the first level of data typing—whether a field is textual or numeric.

#### String (Text) Fields:

Represent non-numeric data like names, categories, or descriptions.

- Examples: `City`, `Product Name`, `Status = "Open/Closed"    

#### Numeric Fields:

Contain numbers and can be further divided into **integers** and **decimals**.

- **Integer** examples: `Age = 21`, `Number of Items Sold = 5`
- **Decimal** examples: `Temperature = 98.6`, `Sales Revenue = 1234.56`

**Why it matters**: Numeric fields can be aggregated (mean, median, sum), while string fields are usually grouped or counted.

---

### b. **Continuous vs. Discrete Numeric Fields**

#### Continuous Fields:

Can take on _any value_ within a range, often measured rather than counted.

- Examples: `Height`, `Weight`, `Temperature`, `Time`
- Suitable visualizations: line charts, histograms, density plots, scatter plots

#### Discrete Fields:

Consist of distinct and separate values, often counted.

- Examples: `Number of children`, `Days of the week`, `Star rating = 1 to 5`
- Suitable visualizations: bar charts, dot plots, pie charts

**Key Tip**: A numeric field doesn’t automatically mean it’s continuous. For instance, `ZIP Code` is numeric but discrete and categorical in nature.

---

### Summary Table

|Attribute|Description|Example|Good Visuals|
|---|---|---|---|
|Missing Values|No data available|`NULL`, `NaN`, `"N/A"`|Flagged in preprocessing|
|Outliers|Extreme, unusual values|Age = `150`|Boxplot, scatter plot|
|Codings|Inconsistent representation of same value|`"M"`, `"Male"`, `1`|Standardize before plotting|
|String (Text)|Textual data|`"New York"`, `"Red"`|Bar chart, word cloud|
|Integer (Discrete)|Countable numeric values|`1`, `2`, `3`|Bar chart, dot plot|
|Decimal (Continuous)|Measurable numeric values|`2.5`, `1234.56`|Histogram, line chart|


# Data Structure

In data visualization, it's essential to understand _how_ data is structured and _what kind_ of measurements are being recorded. Different data shapes and measurement contexts dictate different types of visualizations and preprocessing steps. Below, we explore common structural and temporal classifications of data.

---

## 1. Cross-Sectional Data

### Definition:

Cross-sectional data refers to observations collected at a single point in time, typically across different subjects, such as individuals, organizations, or regions.

### Examples:

- A census dataset showing the population of each U.S. state in the year 2020.
- A marketing dataset showing ad spend across different campaigns for one specific quarter.
- Student test scores across multiple schools for a single semester.

**Why it matters**: Cross-sectional data is static—ideal for comparisons between entities using bar charts, box plots, or maps.

### Appropriate Visualizations:

- Bar chart (to compare regions, departments, etc.)
- Heat map (to show intensity of a value across categories)
- Pie chart (if the dataset is very simple and categorical)    

---

## 2. Longitudinal Data

### Definition:

Also known as _time series_ data, longitudinal data involves repeated observations of the same variables over time.

### Examples:

- Daily stock prices for Apple over the past 5 years.    
- Monthly unemployment rates by country.    
- A student’s GPA recorded each semester.    

**Why it matters**: Longitudinal data reveals trends, cycles, and patterns over time. Visualizations should emphasize temporal dynamics.

### Appropriate Visualizations:

- Line charts (to show change over time)    
- Area charts (to show accumulation or distribution)    
- Animated plots or dashboards (for dynamic temporal exploration)    

---

## 3. Roll-Up Data

### Definition:

Roll-up data includes a mix of detailed and aggregated (summary) records in the same table. This is common in government or institutional data where subtotal or total rows are embedded within the raw dataset.

### Examples:

- A spreadsheet listing monthly spending by department, followed by yearly totals.    
- Education test data showing school-level results and then state-wide averages as separate rows.    
- Crime statistics by city with a final row for national totals.    

**Why it matters**: If not handled properly, roll-up rows can result in double-counting during analysis or incorrect visual representations.

### How to Handle:

- **Flag or remove** summary rows before aggregation.    
- **Separate** detail and summary records for different visualizations.    

### Common Pitfall:

Plotting total and component rows together can distort distributions or trends. For example, including both "New York City" and "All U.S. Cities" in the same bar chart can be misleading.

---

## 4. Wide vs. Tall Data

### a. Wide Data

#### Definition:

In wide data, each variable gets its own column. This format is often used for human readability and spreadsheet reports.

#### Example:

|Student|Math|English|History|
|---|---|---|---|
|Alice|95|88|92|
|Bob|87|91|85|

**Use case**: Good for direct comparison between variables. However, most visualization libraries (e.g., ggplot2, Seaborn) expect data in tall format.

---

### b. Tall Data

#### Definition:

Tall (or long) data is more normalized. One row per observation, with columns for entity, variable name, and value.

#### Example (same data as above, in tall format):

|Student|Subject|Score|
|---|---|---|
|Alice|Math|95|
|Alice|English|88|
|Alice|History|92|
|Bob|Math|87|
|Bob|English|91|
|Bob|History|85|

**Why it matters**: Tall data is better for:

- Faceted plots (small multiples)    
- Grouped summaries    
- Most tidy-data-based plotting systems    

---

### Summary Table

|Concept|Description|Good For|Watch Out For|
|---|---|---|---|
|Cross-Sectional|Snapshot of different entities at one time|Comparing groups|Can't show trends|
|Longitudinal|Same entity tracked over time|Showing change, trends|Time intervals must be consistent|
|Roll-Up|Detail and summary mixed in same dataset|Governmental or institutional data|May cause duplication or skewing|
|Wide Format|One column per variable|Direct comparison across fields|Hard to reshape or group|
|Tall Format|One row per observation|Tidy analysis and plotting|More rows, less compact|


---

# References

- [Quizlet Material](https://quizlet.com/1049122215/course_dv20-data-values-and-structure-flash-cards/)
- [Socviz.co Chapter 1](https://socviz.co/lookatdata.html)
- [Book, Fundamentals of Data Visualization](https://clauswilke.com/dataviz/)

  