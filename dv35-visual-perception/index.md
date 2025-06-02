<script src="/course_dv/presentation.js"></script>

# Visual Perception

Our eyes take visual input and convert it into meaning. However, they have a lot of quirks that affect how we interpret information in charts.

## Outcomes
- Explain Weber's Law: how people see changes as relative versus absolute 
- Explain Miller's Law: how the 5 +/-2 rule applies to visual designs
- Explain how the gestalt principle of proximity influences visual grouping in charts.
- Detect cases of visual clutter and propose strategies to reduce cognitive load.
- Explain the Lie Factor and Proportionality Principle
- Explain Steven's psychophysical power law

## Weber's Law: _Relative_ vs. _Absolute_ Changes

Humans tend to interpret data **relatively** (by comparison), not in isolation.

Weber’s Law says that our ability to interpret a percentage change is relative to the absolute value. We can intuitively understand this by imaging our ability to detect a 1lb change. If we are holding 1lb, then it is easy to detect the change, but if we holding 100lbs, then it is very difficult.

Formally, the **just noticeable difference (JND)** between two stimuli is a constant **proportion** of the original stimulus.

![[webers-law.png|500]]

If you’re holding a weight of 100g, and the JND is 2g, then for a 200g weight, the JND would be 4g. The ratio remains constant:

Weber's Law applies to visual perception. Look at the example below. The the change on the left is less significant than the change on the right.
![[relative-abs-change.png|400]]

Be sure of what you're trying to communicate. Are you trying to communicate an absolute number, or the change?

## Miller's Law: Working Memory (5 ± 2) Rule

The **“5 ± 2” rule**, also known as **Miller’s Law**, originates from a 1956 paper by psychologist **George A. Miller** titled _"The Magical Number Seven, Plus or Minus Two"_. It refers to the idea that the **average person can hold about 7 (plus or minus 2)** discrete items in **working memory** at one time—so roughly **between 5 and 9** items. Modern research sometimes suggests the working memory capacity is closer to **4 chunks**, depending on the complexity of the information (Cowan, 2001).

It applies specifically to **short-term memory**, not long-term learning. The term **chunk** refers to a meaningful unit, not necessarily a single item. By "chunking," we can expand what’s stored in memory.

As pratical examples:
* Menu designers group related items (drinks, entrees, etc...)
* Use 3-5 bullet points on a slide 
* Visually group survey fields into similar groups using proximity
* Limit navigation menus to 5-7 items at each level

Miller's Law means that people can only remember **4 chunks** of information without external aids. The below chart violates this by requiring that people recall too many different categories.

![[miller-law-overload-categories.png]]

How does this change our chart designs?
- Help users chunk information by using conventions (green = good, red = bad, cause on the x axis, effect on the y-axis, etc..)
- Break complex charts apart into separate to help users process individual points

Know the difference between *exploratory* and *confirmatory* visual designs. While exploring a dataset, you'll often overload information to detect trends. But, when it is time to communicate your results, you'll generally need to drastically simplify the charts to make the understandable.


## Gestalt Principle of Proximity 

Gestalt principles help users **intuitively group** related items. The most important one for graphics proximity. This is the idea that items close together are perceived as related.    

Improve your dashboards by placing white space between charts, and placing related charts side-by-side. The below illustrates the need for careful white space

![don't matter|300](you-dont-matter-give-up.jpg)m

Improve individual charts by reducing alignment points. While center items often feels like a good idea, in practice it can greatly add to the number of alignment points for the eye to *catch* on.

![[alignment-points.png]]


You can also improve charts by reducing eye travel. Try to minimize distance between legends and data points, as well as comparisons between different parts of the chart.
![[reduce-eye-travel.png]]

Avoid visual noise—**every element should serve a purpose**.

## Proportionality & Lie Factor

**Proportionality** refers to the principle that **visual representations in charts should accurately reflect the numerical quantities they represent**. This means the size, length, area, or angle of a visual element (like a bar, circle, or slice) must be **proportional** to the data value it encodes.

![[proportionality-b-v-a.png]]
*Source: Tufte's The Visual Display of Quantitative Information*

The Lie Factor was introduced by Edward Tufte in _The Visual Display of Quantitative Information_. While it has been replaced with better measures, the **Lie Factor** is still an intuitive way to measure distortion in a chart.

![[lie-factor.png]]

- If **Lie Factor ≈ 1** → the graphic is accurate.
- **Lie Factor > 1.05 or < 0.95**, Tufte considered it **misleading**.
   
Unfortunately, Excel often starts the axis at 100 in bar charts. The bar chart on the left greatly overstates the change between years 1-3. A corrected version is shown on the right.

![[misleading-axis.png]]

A better way to show change with the base number is very large is to use a line chart, and state your values at % differences from the base year. Line charts are more often used to represent ratio values (instead of absolute values).

![[change-in-sales-line.png|400]]

Common sources of proportionality errors are:

- Using **area** or **volume** instead of **length** to represent 1D quantities (e.g., circle size).    
- 3D effects that **inflate perception**.    
- Non-zero baselines on bar charts.    
- Inconsistent axis scaling.    
- Icon repetition (e.g., duplicating icons for count) without accounting for perceptual grouping. 


## Steven's Psychophysical Power Law

**Stevens’ Power Law** describes the relationship between the **actual intensity of a stimulus** and how that intensity is **perceived** by a human observer. It refines and replaces earlier models like **Weber–Fechner Law**, especially for a wider variety of sensory experiences. 

The graph below shows that we perceive actual changes in stimulus at a different rate than the underlying value actually changes. For example, we perceive a small change in electrical shocks as a big change. We have the opposite direction for brightness, perceiving large changes as small changes.
![[steven-psychophysical-power-law.png]]
[source: Visualization Analysis and Design by Tamarna Munzner](https://www.oreilly.com/library/view/visualization-analysis-and/9781466508910/)

