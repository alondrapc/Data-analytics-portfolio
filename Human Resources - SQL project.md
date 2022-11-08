# Human Resources - SQL project

## Alondra Perez Cortez

## 2022-11-03

### **Introduction**

This is my first SQL project where I will be demonstrating beginning to intermediate SQL skills using Microsoft SQL and SQLite. I first wrote my script in SQLite Studio, but found myself troubled with how to share my finished document in an elegant manner. I like the look of notebooks, but there are not a lot of options for SQLite and Mac users like myself. However, I found a really great [youtube video](https://www.youtube.com/watch?v=glxE7w4D8v8) that taught me how to add MS SQL to my Mac. So I went back to my script and edited it for MS SQL, but left my SQLite script in at the bottom of this page.

If you have any question, please feel free to email me at apcalondraperezcortez (at) gmail.com or via [LinkedIn](https://www.linkedin.com/in/alondra-perez-cortez/). If you want to check out more of my work, please visit my [portfolio](https://sites.google.com/view/alondra-perez-cortez/projects).

### <span style="font-size: 14px;"><b>Project Overview</b></span>

<span style="font-size: 14px;">For this project, I am using a&nbsp;</span> [sample SQL database](https://www.sqltutorial.org/sql-sample-database/) <span style="font-size: 14px;">&nbsp;that manages HR data of a small buisness. I have included a variety of queries — some simple, some more complex and practical, and others that are just outlandish.&nbsp;</span> I will be walking you through beginning to intermediate SQL queries: `JOIN`, `UPDATE`, `MINUS`, subqueries, temporary tables, and recursive queries to name a few tools used in this project.

### **Database Structure**

![Image of database structure](https://www.sqltutorial.org/wp-content/uploads/2016/04/SQL-Sample-Database-Schema.png))

_Basic filtering_

1\. Find employees whose salary is less than $6,000. Return their full name and salary.


```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name, salary
FROM employees
WHERE salary < 6000
```


(12 rows affected)



Total execution time: 00:00:00.056





<table><tr><th>full_name</th><th>salary</th></tr><tr><td>David Austin</td><td>4800.00</td></tr><tr><td>Valli Pataballa</td><td>4800.00</td></tr><tr><td>Diana Lorentz</td><td>4200.00</td></tr><tr><td>Alexander Khoo</td><td>3100.00</td></tr><tr><td>Shelli Baida</td><td>2900.00</td></tr><tr><td>Sigal Tobias</td><td>2800.00</td></tr><tr><td>Guy Himuro</td><td>2600.00</td></tr><tr><td>Karen Colmenares</td><td>2500.00</td></tr><tr><td>Irene Mikkilineni</td><td>2700.00</td></tr><tr><td>Sarah Bell</td><td>4000.00</td></tr><tr><td>Britney Everett</td><td>3900.00</td></tr><tr><td>Jennifer Whalen</td><td>4400.00</td></tr></table>



2\. Find employees who were hired after 1997-09-01. Return their full name and hire date.


```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name, hire_date --Using CONCAT will combine strings in the first name column, a space, and last name column.
FROM employees
WHERE hire_date > '1997-09-01'
```


(15 rows affected)



Total execution time: 00:00:00.103





<table><tr><th>full_name</th><th>hire_date</th></tr><tr><td>Valli Pataballa</td><td>1998-02-05</td></tr><tr><td>Diana Lorentz</td><td>1999-02-07</td></tr><tr><td>John Chen</td><td>1997-09-28</td></tr><tr><td>Ismael Sciarra</td><td>1997-09-30</td></tr><tr><td>Jose Manuel Urman</td><td>1998-03-07</td></tr><tr><td>Luis Popp</td><td>1999-12-07</td></tr><tr><td>Shelli Baida</td><td>1997-12-24</td></tr><tr><td>Guy Himuro</td><td>1998-11-15</td></tr><tr><td>Karen Colmenares</td><td>1999-08-10</td></tr><tr><td>Shanta Vollman</td><td>1997-10-10</td></tr><tr><td>Irene Mikkilineni</td><td>1998-09-28</td></tr><tr><td>Jonathon Taylor</td><td>1998-03-24</td></tr><tr><td>Jack Livingston</td><td>1998-04-23</td></tr><tr><td>Kimberely Grant</td><td>1999-05-24</td></tr><tr><td>Charles Johnson</td><td>2000-01-04</td></tr></table>



_Altering tables_

3. Create a new column in 'employees' for full name


```sql
--Since we will be using the full name of employees quite often, I decided to save the full name of employees as a new column
ALTER TABLE [master].[dbo].[employees] --Indicating that we want to alter an existing table
ADD full_name TEXT --Adding a new column to the exisiting table
```


Commands completed successfully.



Total execution time: 00:00:00.064



```sql
UPDATE [master].[dbo].[employees] --Indicating that we want to update the named table
SET full_name = CONCAT(employees.first_name, ' ', employees.last_name) --Inserting data into the new 'full_name' column

--Print out top three lines to ensure the code did what we needed it to do
SELECT TOP (3) employee_id, first_name, last_name, full_name
FROM employees
```


(40 rows affected)



(3 rows affected)



Total execution time: 00:00:00.009





<table><tr><th>employee_id</th><th>first_name</th><th>last_name</th><th>full_name</th></tr><tr><td>100</td><td>Steven</td><td>King</td><td>Steven King</td></tr><tr><td>101</td><td>Neena</td><td>Kochhar</td><td>Neena Kochhar</td></tr><tr><td>102</td><td>Lex</td><td>De Haan</td><td>Lex De Haan</td></tr></table>



_Filtering and Joining_

4. What job titles are within the Finance department?


```sql
--What is the department ID for the Finance department?
SELECT *
FROM departments
WHERE department_name = 'Finance' --Only return lines where this condition is satisfied
--The department_id for Finance is 10.
```


(1 row affected)



Total execution time: 00:00:00.024





<table><tr><th>department_id</th><th>department_name</th><th>location_id</th></tr><tr><td>10</td><td>Finance</td><td>1700</td></tr></table>




```sql
--METHOD 1, simple queries
--Find all job_id's for everyone in the Finance department
SELECT DISTINCT(job_id) --Find unique job ID's within rows where department_id equals 10
FROM employees
WHERE department_id = 10
--7 and 6 are the two job_id's within the Finance department

--Find the job titles for job_id's 7 and 6
SELECT job_title AS finance_jobs
FROM jobs
WHERE job_id = 7 OR job_id = 6
-- Accountant and Finance Manager are the two titles held in the Finance department

```


(2 rows affected)



(2 rows affected)



Total execution time: 00:00:00.016





<table><tr><th>job_id</th></tr><tr><td>6</td></tr><tr><td>7</td></tr></table>






<table><tr><th>finance_jobs</th></tr><tr><td>Accountant</td></tr><tr><td>Finance Manager</td></tr></table>




```sql
--METHOD 2, join
SELECT DISTINCT(jobs.job_title) AS finance_jobs
FROM employees
JOIN jobs ON employees.job_id = jobs.job_id --Join two tables with the foreign key of `employees`, job_id
WHERE employees.department_id = 10
```


(2 rows affected)



Total execution time: 00:00:00.010





<table><tr><th>finance_jobs</th></tr><tr><td>Accountant</td></tr><tr><td>Finance Manager</td></tr></table>



5\. Which employees have first names OR last names that do not start with the letters 'D' or 'S'? Return their hire date, salary, and department.


```sql
SELECT employees.full_name, employees.hire_date, employees.salary, departments.department_name
FROM employees
JOIN departments on employees.department_id = departments.department_id
WHERE employees.first_name NOT LIKE 'D%' AND --Find values that start with D or S and DO NOT include them in the result
        employees.first_name NOT LIKE 'S%' AND
        employees.last_name NOT LIKE 'D%' AND
        employees.last_name NOT LIKE 'S%'
```


(27 rows affected)



Total execution time: 00:00:00.029





<table><tr><th>full_name</th><th>hire_date</th><th>salary</th><th>department_name</th></tr><tr><td>Neena Kochhar</td><td>1989-09-21</td><td>17000.00</td><td>Executive</td></tr><tr><td>Alexander Hunold</td><td>1990-01-03</td><td>9000.00</td><td>IT</td></tr><tr><td>Bruce Ernst</td><td>1991-05-21</td><td>6000.00</td><td>IT</td></tr><tr><td>Valli Pataballa</td><td>1998-02-05</td><td>4800.00</td><td>IT</td></tr><tr><td>Nancy Greenberg</td><td>1994-08-17</td><td>12000.00</td><td>Finance</td></tr><tr><td>John Chen</td><td>1997-09-28</td><td>8200.00</td><td>Finance</td></tr><tr><td>Jose Manuel Urman</td><td>1998-03-07</td><td>7800.00</td><td>Finance</td></tr><tr><td>Luis Popp</td><td>1999-12-07</td><td>6900.00</td><td>Finance</td></tr><tr><td>Alexander Khoo</td><td>1995-05-18</td><td>3100.00</td><td>Purchasing</td></tr><tr><td>Guy Himuro</td><td>1998-11-15</td><td>2600.00</td><td>Purchasing</td></tr><tr><td>Karen Colmenares</td><td>1999-08-10</td><td>2500.00</td><td>Purchasing</td></tr><tr><td>Matthew Weiss</td><td>1996-07-18</td><td>8000.00</td><td>Shipping</td></tr><tr><td>Adam Fripp</td><td>1997-04-10</td><td>8200.00</td><td>Shipping</td></tr><tr><td>Payam Kaufling</td><td>1995-05-01</td><td>7900.00</td><td>Shipping</td></tr><tr><td>Irene Mikkilineni</td><td>1998-09-28</td><td>2700.00</td><td>Shipping</td></tr><tr><td>John Russell</td><td>1996-10-01</td><td>14000.00</td><td>Sales</td></tr><tr><td>Karen Partners</td><td>1997-01-05</td><td>13500.00</td><td>Sales</td></tr><tr><td>Jonathon Taylor</td><td>1998-03-24</td><td>8600.00</td><td>Sales</td></tr><tr><td>Jack Livingston</td><td>1998-04-23</td><td>8400.00</td><td>Sales</td></tr><tr><td>Kimberely Grant</td><td>1999-05-24</td><td>7000.00</td><td>Sales</td></tr><tr><td>Charles Johnson</td><td>2000-01-04</td><td>6200.00</td><td>Sales</td></tr><tr><td>Britney Everett</td><td>1997-03-03</td><td>3900.00</td><td>Shipping</td></tr><tr><td>Jennifer Whalen</td><td>1987-09-17</td><td>4400.00</td><td>Administration</td></tr><tr><td>Michael Hartstein</td><td>1996-02-17</td><td>13000.00</td><td>Marketing</td></tr><tr><td>Pat Fay</td><td>1997-08-17</td><td>6000.00</td><td>Marketing</td></tr><tr><td>Hermann Baer</td><td>1994-06-07</td><td>10000.00</td><td>Public Relations</td></tr><tr><td>William Gietz</td><td>1994-06-07</td><td>8300.00</td><td>Accounting</td></tr></table>



_Grouping_

6\. Which location has the most employees?


```sql
--Which is the biggest department?
SELECT TOP 1 E.department_id, D.department_name, COUNT(*) AS employee_count --Return the first row, after ordering the results where the highest employee_count is first in line 7
FROM employees E --Setting an alias, 'E', for employees so I do not have to repeatedly type the whole name of the table when specifying what table the column name is found
JOIN departments D
ON E.department_id = D.department_id
GROUP BY E.department_id, D.department_name --Since employee_count is computed using the aggregate function, `COUNT`, I need to aggregate department ID and name
ORDER BY employee_count DESC
--The Shipping department has the most employees at 7 employees

--Where is the biggest department?
SELECT D.department_name, L.city, L.country_id
FROM departments D
JOIN locations L ON D.location_id = L.location_id
WHERE department_id = 5
--Shipping in South San Francisco, US is the largest department
```


(1 row affected)



(1 row affected)



Total execution time: 00:00:00.014





<table><tr><th>department_id</th><th>department_name</th><th>employee_count</th></tr><tr><td>5</td><td>Shipping</td><td>7</td></tr></table>






<table><tr><th>department_name</th><th>city</th><th>country_id</th></tr><tr><td>Shipping</td><td>South San Francisco</td><td>US</td></tr></table>



7\. Which department has the most managers?


```sql
SELECT TOP 1 E.department_id, D.department_name, COUNT(DISTINCT(E.manager_id)) manager_count --Return the first row, after ordering the count of unique managers from highest to lowest in line 5.
FROM employees E
JOIN departments D ON E.department_id = D.department_id --Joining the two tables to find the department name from the department ID
GROUP BY E.department_id, D.department_name --Since employee_count is computed using the aggregate function, `COUNT`, I need to aggregate department ID and name
ORDER BY manager_count DESC
```


Warning: Null value is eliminated by an aggregate or other SET operation.



(1 row affected)



Total execution time: 00:00:00.009





<table><tr><th>department_id</th><th>department_name</th><th>manager_count</th></tr><tr><td>5</td><td>Shipping</td><td>3</td></tr></table>



_Temporary Table_

8\. What are the new salaries of all employees, based on their titles?


```sql
DROP TABLE IF EXISTS #raises --If I rerun the temporary table code below, I would get an error saying that the table already exists. 
                                --Dropping the table if it exists will allow me to create the table again without issue.

SELECT job_id, job_title,
    (CASE
        WHEN [job_title] LIKE '%President%' OR
            [job_title] LIKE '%Manager%'
            THEN 0.05
        ELSE 0.03 END) AS percent_inc --If the job title includes "President" or "Manager" in any position of the job title, then assign a 5% increase. Otherwise, assign a 3% increase.
INTO #raises --Save the above query into a temporary table named "raises"
FROM jobs

SELECT E.employee_id, E.full_name, E.job_id, E.salary AS old_salary, R.percent_inc, (E.salary + E.salary*R.percent_inc) AS new_salary --Calculating new salary from information saved in the temporary table.
FROM employees E
JOIN #raises R ON E.job_id = R.job_id
```


(19 rows affected)



(40 rows affected)



Total execution time: 00:00:00.034





<table><tr><th>employee_id</th><th>full_name</th><th>job_id</th><th>old_salary</th><th>percent_inc</th><th>new_salary</th></tr><tr><td>100</td><td>Steven King</td><td>4</td><td>24000.00</td><td>0.05</td><td>25200.0000</td></tr><tr><td>101</td><td>Neena Kochhar</td><td>5</td><td>17000.00</td><td>0.05</td><td>17850.0000</td></tr><tr><td>102</td><td>Lex De Haan</td><td>5</td><td>17000.00</td><td>0.05</td><td>17850.0000</td></tr><tr><td>103</td><td>Alexander Hunold</td><td>9</td><td>9000.00</td><td>0.03</td><td>9270.0000</td></tr><tr><td>104</td><td>Bruce Ernst</td><td>9</td><td>6000.00</td><td>0.03</td><td>6180.0000</td></tr><tr><td>105</td><td>David Austin</td><td>9</td><td>4800.00</td><td>0.03</td><td>4944.0000</td></tr><tr><td>106</td><td>Valli Pataballa</td><td>9</td><td>4800.00</td><td>0.03</td><td>4944.0000</td></tr><tr><td>107</td><td>Diana Lorentz</td><td>9</td><td>4200.00</td><td>0.03</td><td>4326.0000</td></tr><tr><td>108</td><td>Nancy Greenberg</td><td>7</td><td>12000.00</td><td>0.05</td><td>12600.0000</td></tr><tr><td>109</td><td>Daniel Faviet</td><td>6</td><td>9000.00</td><td>0.03</td><td>9270.0000</td></tr><tr><td>110</td><td>John Chen</td><td>6</td><td>8200.00</td><td>0.03</td><td>8446.0000</td></tr><tr><td>111</td><td>Ismael Sciarra</td><td>6</td><td>7700.00</td><td>0.03</td><td>7931.0000</td></tr><tr><td>112</td><td>Jose Manuel Urman</td><td>6</td><td>7800.00</td><td>0.03</td><td>8034.0000</td></tr><tr><td>113</td><td>Luis Popp</td><td>6</td><td>6900.00</td><td>0.03</td><td>7107.0000</td></tr><tr><td>114</td><td>Den Raphaely</td><td>14</td><td>11000.00</td><td>0.05</td><td>11550.0000</td></tr><tr><td>115</td><td>Alexander Khoo</td><td>13</td><td>3100.00</td><td>0.03</td><td>3193.0000</td></tr><tr><td>116</td><td>Shelli Baida</td><td>13</td><td>2900.00</td><td>0.03</td><td>2987.0000</td></tr><tr><td>117</td><td>Sigal Tobias</td><td>13</td><td>2800.00</td><td>0.03</td><td>2884.0000</td></tr><tr><td>118</td><td>Guy Himuro</td><td>13</td><td>2600.00</td><td>0.03</td><td>2678.0000</td></tr><tr><td>119</td><td>Karen Colmenares</td><td>13</td><td>2500.00</td><td>0.03</td><td>2575.0000</td></tr><tr><td>120</td><td>Matthew Weiss</td><td>19</td><td>8000.00</td><td>0.05</td><td>8400.0000</td></tr><tr><td>121</td><td>Adam Fripp</td><td>19</td><td>8200.00</td><td>0.05</td><td>8610.0000</td></tr><tr><td>122</td><td>Payam Kaufling</td><td>19</td><td>7900.00</td><td>0.05</td><td>8295.0000</td></tr><tr><td>123</td><td>Shanta Vollman</td><td>19</td><td>6500.00</td><td>0.05</td><td>6825.0000</td></tr><tr><td>126</td><td>Irene Mikkilineni</td><td>18</td><td>2700.00</td><td>0.03</td><td>2781.0000</td></tr><tr><td>145</td><td>John Russell</td><td>15</td><td>14000.00</td><td>0.05</td><td>14700.0000</td></tr><tr><td>146</td><td>Karen Partners</td><td>15</td><td>13500.00</td><td>0.05</td><td>14175.0000</td></tr><tr><td>176</td><td>Jonathon Taylor</td><td>16</td><td>8600.00</td><td>0.03</td><td>8858.0000</td></tr><tr><td>177</td><td>Jack Livingston</td><td>16</td><td>8400.00</td><td>0.03</td><td>8652.0000</td></tr><tr><td>178</td><td>Kimberely Grant</td><td>16</td><td>7000.00</td><td>0.03</td><td>7210.0000</td></tr><tr><td>179</td><td>Charles Johnson</td><td>16</td><td>6200.00</td><td>0.03</td><td>6386.0000</td></tr><tr><td>192</td><td>Sarah Bell</td><td>17</td><td>4000.00</td><td>0.03</td><td>4120.0000</td></tr><tr><td>193</td><td>Britney Everett</td><td>17</td><td>3900.00</td><td>0.03</td><td>4017.0000</td></tr><tr><td>200</td><td>Jennifer Whalen</td><td>3</td><td>4400.00</td><td>0.03</td><td>4532.0000</td></tr><tr><td>201</td><td>Michael Hartstein</td><td>10</td><td>13000.00</td><td>0.05</td><td>13650.0000</td></tr><tr><td>202</td><td>Pat Fay</td><td>11</td><td>6000.00</td><td>0.03</td><td>6180.0000</td></tr><tr><td>203</td><td>Susan Mavris</td><td>8</td><td>6500.00</td><td>0.03</td><td>6695.0000</td></tr><tr><td>204</td><td>Hermann Baer</td><td>12</td><td>10000.00</td><td>0.03</td><td>10300.0000</td></tr><tr><td>205</td><td>Shelley Higgins</td><td>2</td><td>12000.00</td><td>0.05</td><td>12600.0000</td></tr><tr><td>206</td><td>William Gietz</td><td>1</td><td>8300.00</td><td>0.03</td><td>8549.0000</td></tr></table>



_Recursive Queries_

9\. Find the hierarchy of employees under a given manager "Neena Kochhar"


```sql
WITH emp_hierarchy AS --Naming the CTE table
    (SELECT employee_id, full_name, manager_id, job_id, 1 as level --Assigning level 1 (top of the chain) to the employee, Neena, in the base query.
    FROM employees WHERE first_name = 'Neena'
    UNION ALL --Merging the two queries
    SELECT E.employee_id, E.full_name, E.manager_id, E.job_id, H.level + 1 AS level --The recursive query will add 1 to the level of the previous iteration.
    FROM emp_hierarchy H
    JOIN employees E ON H.employee_id = E.manager_id) --Setting the employee ID to the manager ID so we can find rows where the employee of 
                                                        --the previous iteration of the recursive query is the manager of the current employee.
                                                        --The recursive query will terminate when the employee ID of the last iteration does not appear as a manager ID for any other rows.
SELECT H2.employee_id, H2.full_name AS employee_name, E2.full_name AS manager_name, H2.level AS level --Choosing and assigning an alias to columns from CTE to return
FROM emp_hierarchy H2
JOIN employees E2 ON E2.employee_id = H2.manager_id --Find the full names of those who are in the CTE above
```


(12 rows affected)



Total execution time: 00:00:00.029





<table><tr><th>employee_id</th><th>employee_name</th><th>manager_name</th><th>level</th></tr><tr><td>101</td><td>Neena Kochhar</td><td>Steven King</td><td>1</td></tr><tr><td>108</td><td>Nancy Greenberg</td><td>Neena Kochhar</td><td>2</td></tr><tr><td>200</td><td>Jennifer Whalen</td><td>Neena Kochhar</td><td>2</td></tr><tr><td>203</td><td>Susan Mavris</td><td>Neena Kochhar</td><td>2</td></tr><tr><td>204</td><td>Hermann Baer</td><td>Neena Kochhar</td><td>2</td></tr><tr><td>205</td><td>Shelley Higgins</td><td>Neena Kochhar</td><td>2</td></tr><tr><td>206</td><td>William Gietz</td><td>Shelley Higgins</td><td>3</td></tr><tr><td>109</td><td>Daniel Faviet</td><td>Nancy Greenberg</td><td>3</td></tr><tr><td>110</td><td>John Chen</td><td>Nancy Greenberg</td><td>3</td></tr><tr><td>111</td><td>Ismael Sciarra</td><td>Nancy Greenberg</td><td>3</td></tr><tr><td>112</td><td>Jose Manuel Urman</td><td>Nancy Greenberg</td><td>3</td></tr><tr><td>113</td><td>Luis Popp</td><td>Nancy Greenberg</td><td>3</td></tr></table>



_Common Table Expression (CTE)_

10\. Which employees do not have dependents?


```sql
WITH dependentless AS ( --creating a CTE
    SELECT employee_id
    FROM employees
    EXCEPT --Do not include rows that appear in this query below
    SELECT employee_id
    FROM dependents)
SELECT D.employee_id, E.full_name
FROM dependentless D
JOIN employees E ON D.employee_id = E.employee_id --Join the CTE to employees to find the full names of the employees whose ID's are present in the CTE above
```


(10 rows affected)



Total execution time: 00:00:00.038





<table><tr><th>employee_id</th><th>full_name</th></tr><tr><td>120</td><td>Matthew Weiss</td></tr><tr><td>121</td><td>Adam Fripp</td></tr><tr><td>122</td><td>Payam Kaufling</td></tr><tr><td>123</td><td>Shanta Vollman</td></tr><tr><td>126</td><td>Irene Mikkilineni</td></tr><tr><td>177</td><td>Jack Livingston</td></tr><tr><td>178</td><td>Kimberely Grant</td></tr><tr><td>179</td><td>Charles Johnson</td></tr><tr><td>192</td><td>Sarah Bell</td></tr><tr><td>193</td><td>Britney Everett</td></tr></table>



## Original SQLite Script

\--FILTERING

\--1. Find employees whose salary is less than $6,000. Return their full name and salary

SELECT first\_name || " " || last\_name AS full\_name, salary

FROM employees

WHERE salary \< 6000

\--2. Find employees who were hired after 1997-09-01. Return their full name and hire date.

SELECT first\_name || " " || last\_name AS full\_name, hire\_date

FROM employees

WHERE hire\_date \> date('1997-09-01')

\--ALTERING TABLES

\--3. Create a new column in 'employees' for full name

ALTER TABLE employees

ADD full\_name TEXT

UPDATE employees

SET full\_name = employees.first\_name || " " || employees.last\_name

\--FILTERING AND JOINNING

\--4. What job titles are within the Finance department?

\--What is the deparmtent ID for the Finance department?

SELECT \*

FROM departments

WHERE department\_name = "Finance"

\--The department\_id for Finance is 10.

\--METHOD 1, simple queries

\--Find all job\_id's for everyone in the Finance department

SELECT DISTINCT(job\_id)

FROM employees

WHERE department\_id = 10

\--7 and 6 are the two job\_id's within the Finance department

\--Find the job titles for job\_id's 7 and 6

SELECT job\_title AS finance\_jobs

FROM jobs

WHERE job\_id = 7 OR job\_id = 6

\-- Accountant and Finance Manager are the two titles held in the Finance department

\--METHOD 2, join

SELECT DISTINCT(jobs.job\_title) AS finance\_jobs

FROM employees

JOIN jobs ON employees.job\_id = jobs.job\_id

WHERE employees.department\_id = 10

\--5. Which employees have first names OR last names that do not start with the letters 'D' or 'S'? When were they hired? What is their salary? What is their department?

SELECT employees.full\_name, employees.hire\_date, employees.salary, departments.department\_name

FROM employees

JOIN departments on employees.department\_id = departments.department\_id

WHERE employees.first\_name NOT LIKE 'D%' AND

employees.first\_name NOT LIKE 'S%' AND

employees.last\_name NOT LIKE 'D%' AND

employees.last\_name NOT LIKE 'S%'

\--GROUPING

\--6. Which location has the most employees?

\--Which is the biggest department?

SELECT department\_id, MAX(employee\_count)

FROM (SELECT department\_id, COUNT(department\_id) employee\_count

FROM employees

GROUP BY department\_id)

\--Department ID 5 has the most employees at 7 employees

\--Where is the biggest department?

SELECT departments.department\_name, locations.city, locations.country\_id

FROM departments

JOIN locations ON departments.location\_id = locations.location\_id

WHERE department\_id = 5

\--Shipping in South San Francisco, US is the largest department

\--SUBQUERIES

\--7. Which department has the most managers?

SELECT departments.department\_name, MAX(department\_count.manager\_count) manager\_count

FROM (SELECT department\_id, COUNT(DISTINCT(manager\_id)) manager\_count

FROM employees

GROUP BY department\_id) department\_count

JOIN departments ON departments.department\_id = department\_count.department\_id

\--The Shipping department has 3 managers

\--TEMPORARY TABLES

\--8. What are the new salaries of all employees, based on their titles?

\--assign percentage increase for raise

DROP TABLE IF EXISTS raises

CREATE TEMP TABLE raises AS

SELECT job\_id, job\_title,

(CASE

WHEN \[job\_title\] LIKE "%President%" OR

\[job\_title\] LIKE "%Manager%"

THEN 0.05

ELSE 0.03 END) AS percent\_inc

FROM jobs

\--calculate new salary after raise

SELECT E.employee\_id, E.full\_name, E.job\_id, E.salary AS old\_salary, R.percent\_inc, (E.salary + E.salary\*R.percent\_inc) AS new\_salary

FROM employees E

JOIN raises R ON E.job\_id = R.job\_id

\--RECURSIVE QUERIES

\--9. Find the hierarchy of employees under a given manager "Neena Kochhar"

WITH RECURSIVE emp\_hierarchy AS

(SELECT employee\_id, full\_name, manager\_id, job\_id, 1 as level

FROM employees

WHERE first\_name = "Neena"

UNION

SELECT E.employee\_id, E.full\_name, E.manager\_id, E.job\_id, H.level + 1 AS level

FROM emp\_hierarchy H

JOIN employees E ON H.employee\_id = E.manager\_id)

SELECT H2.employee\_id, H2.full\_name AS employee\_name, E2.full\_name AS manager\_name, H2.level AS level

FROM emp\_hierarchy H2

JOIN employees E2 ON E2.employee\_id = H2.manager\_id

\--CTE

\--10. Which employees do not have dependents?

WITH dependentless AS (

SELECT employee\_id

FROM employees

EXCEPT

SELECT employee\_id

FROM dependents)

SELECT D.employee\_id, E.full\_name

FROM dependentless D

JOIN employees E ON D.employee\_id = E.employee\_id
