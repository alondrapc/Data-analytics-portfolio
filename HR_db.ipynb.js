{
    "metadata": {
        "kernelspec": {
            "name": "SQL",
            "display_name": "SQL",
            "language": "sql"
        },
        "language_info": {
            "name": "sql",
            "version": ""
        }
    },
    "nbformat_minor": 2,
    "nbformat": 4,
    "cells": [
        {
            "cell_type": "markdown",
            "source": [
                "# Human Resources - SQL project\n",
                "\n",
                "## Alondra Perez Cortez\n",
                "\n",
                "## 2022-11-03"
            ],
            "metadata": {
                "azdata_cell_guid": "3cba07d7-2a28-4f20-9d5c-b2b6d9e895c9"
            },
            "attachments": {}
        },
        {
            "cell_type": "markdown",
            "source": [
                "### **Introduction**\n",
                "\n",
                "This is my first SQL project where I will be demonstrating beginning to intermediate SQL skills using Microsoft SQL and SQLite. I first wrote my script in SQLite Studio, but found myself troubled with how to share my finished document in an elegant manner. I like the look of notebooks, but there are not a lot of options for SQLite and Mac users like myself. However, I found a really great [youtube video](https://www.youtube.com/watch?v=glxE7w4D8v8) that taught me how to add MS SQL to my Mac. So I went back to my script and edited it for MS SQL, but left my SQLite script in at the bottom of this page.\n",
                "\n",
                "If you have any question, please feel free to email me at apcalondraperezcortez (at) gmail.com or via [LinkedIn](https://www.linkedin.com/in/alondra-perez-cortez/). If you want to check out more of my work, please visit my [portfolio](https://sites.google.com/view/alondra-perez-cortez/projects)."
            ],
            "metadata": {
                "azdata_cell_guid": "24df3566-7d09-470c-950d-cdfadbe5ca59"
            },
            "attachments": {}
        },
        {
            "cell_type": "markdown",
            "source": [
                "### <span style=\"font-size: 14px;\"><b>Project Overview</b></span>\n",
                "\n",
                "<span style=\"font-size: 14px;\">For this project, I am using a&nbsp;</span> [sample SQL database](https://www.sqltutorial.org/sql-sample-database/) <span style=\"font-size: 14px;\">&nbsp;that manages HR data of a small buisness. I have included a variety of queries — some simple, some more complex and practical, and others that are just outlandish.&nbsp;</span> I will be walking you through beginning to intermediate SQL queries: `JOIN`, `UPDATE`, `MINUS`, subqueries, temporary tables, and recursive queries to name a few tools used in this project."
            ],
            "metadata": {
                "azdata_cell_guid": "f4eab851-89ce-45dc-a3a2-00e1dfaaad01"
            },
            "attachments": {}
        },
        {
            "cell_type": "markdown",
            "source": [
                "### **Database Structure**\n",
                "\n",
                "![Image of database structure](https://www.sqltutorial.org/wp-content/uploads/2016/04/SQL-Sample-Database-Schema.png))"
            ],
            "metadata": {
                "azdata_cell_guid": "cdf47441-7308-4ccc-a79f-4a915c9090bb"
            },
            "attachments": {}
        },
        {
            "cell_type": "markdown",
            "source": [
                "_Basic filtering_\n",
                "\n",
                "1\\. Find employees whose salary is less than $6,000. Return their full name and salary."
            ],
            "metadata": {
                "azdata_cell_guid": "fc81b5d6-e8e9-447f-ac95-0f686eab3712"
            },
            "attachments": {}
        },
        {
            "cell_type": "code",
            "source": [
                "SELECT CONCAT(first_name, ' ', last_name) AS full_name, salary\n",
                "FROM employees\n",
                "WHERE salary < 6000"
            ],
            "metadata": {
                "azdata_cell_guid": "e92785ad-096a-4574-8cce-0fcb2f2fbea7",
                "language": "sql"
            },
            "outputs": [
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "(12 rows affected)"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "Total execution time: 00:00:00.056"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "execute_result",
                    "execution_count": 4,
                    "data": {
                        "application/vnd.dataresource+json": {
                            "schema": {
                                "fields": [
                                    {
                                        "name": "full_name"
                                    },
                                    {
                                        "name": "salary"
                                    }
                                ]
                            },
                            "data": [
                                {
                                    "0": "David Austin",
                                    "1": "4800.00"
                                },
                                {
                                    "0": "Valli Pataballa",
                                    "1": "4800.00"
                                },
                                {
                                    "0": "Diana Lorentz",
                                    "1": "4200.00"
                                },
                                {
                                    "0": "Alexander Khoo",
                                    "1": "3100.00"
                                },
                                {
                                    "0": "Shelli Baida",
                                    "1": "2900.00"
                                },
                                {
                                    "0": "Sigal Tobias",
                                    "1": "2800.00"
                                },
                                {
                                    "0": "Guy Himuro",
                                    "1": "2600.00"
                                },
                                {
                                    "0": "Karen Colmenares",
                                    "1": "2500.00"
                                },
                                {
                                    "0": "Irene Mikkilineni",
                                    "1": "2700.00"
                                },
                                {
                                    "0": "Sarah Bell",
                                    "1": "4000.00"
                                },
                                {
                                    "0": "Britney Everett",
                                    "1": "3900.00"
                                },
                                {
                                    "0": "Jennifer Whalen",
                                    "1": "4400.00"
                                }
                            ]
                        },
                        "text/html": "<table><tr><th>full_name</th><th>salary</th></tr><tr><td>David Austin</td><td>4800.00</td></tr><tr><td>Valli Pataballa</td><td>4800.00</td></tr><tr><td>Diana Lorentz</td><td>4200.00</td></tr><tr><td>Alexander Khoo</td><td>3100.00</td></tr><tr><td>Shelli Baida</td><td>2900.00</td></tr><tr><td>Sigal Tobias</td><td>2800.00</td></tr><tr><td>Guy Himuro</td><td>2600.00</td></tr><tr><td>Karen Colmenares</td><td>2500.00</td></tr><tr><td>Irene Mikkilineni</td><td>2700.00</td></tr><tr><td>Sarah Bell</td><td>4000.00</td></tr><tr><td>Britney Everett</td><td>3900.00</td></tr><tr><td>Jennifer Whalen</td><td>4400.00</td></tr></table>"
                    },
                    "metadata": {}
                }
            ],
            "execution_count": 4
        },
        {
            "cell_type": "markdown",
            "source": [
                "2\\. Find employees who were hired after 1997-09-01. Return their full name and hire date."
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "9ef9e324-5db8-435e-8c67-a2c4636eed6b"
            },
            "attachments": {}
        },
        {
            "cell_type": "code",
            "source": [
                "SELECT CONCAT(first_name, ' ', last_name) AS full_name, hire_date --Using CONCAT will combine strings in the first name column, a space, and last name column.\n",
                "FROM employees\n",
                "WHERE hire_date > '1997-09-01'"
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "3486e122-16f5-4317-9819-7bbca67f01d2"
            },
            "outputs": [
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "(15 rows affected)"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "Total execution time: 00:00:00.103"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "execute_result",
                    "execution_count": 2,
                    "data": {
                        "application/vnd.dataresource+json": {
                            "schema": {
                                "fields": [
                                    {
                                        "name": "full_name"
                                    },
                                    {
                                        "name": "hire_date"
                                    }
                                ]
                            },
                            "data": [
                                {
                                    "0": "Valli Pataballa",
                                    "1": "1998-02-05"
                                },
                                {
                                    "0": "Diana Lorentz",
                                    "1": "1999-02-07"
                                },
                                {
                                    "0": "John Chen",
                                    "1": "1997-09-28"
                                },
                                {
                                    "0": "Ismael Sciarra",
                                    "1": "1997-09-30"
                                },
                                {
                                    "0": "Jose Manuel Urman",
                                    "1": "1998-03-07"
                                },
                                {
                                    "0": "Luis Popp",
                                    "1": "1999-12-07"
                                },
                                {
                                    "0": "Shelli Baida",
                                    "1": "1997-12-24"
                                },
                                {
                                    "0": "Guy Himuro",
                                    "1": "1998-11-15"
                                },
                                {
                                    "0": "Karen Colmenares",
                                    "1": "1999-08-10"
                                },
                                {
                                    "0": "Shanta Vollman",
                                    "1": "1997-10-10"
                                },
                                {
                                    "0": "Irene Mikkilineni",
                                    "1": "1998-09-28"
                                },
                                {
                                    "0": "Jonathon Taylor",
                                    "1": "1998-03-24"
                                },
                                {
                                    "0": "Jack Livingston",
                                    "1": "1998-04-23"
                                },
                                {
                                    "0": "Kimberely Grant",
                                    "1": "1999-05-24"
                                },
                                {
                                    "0": "Charles Johnson",
                                    "1": "2000-01-04"
                                }
                            ]
                        },
                        "text/html": "<table><tr><th>full_name</th><th>hire_date</th></tr><tr><td>Valli Pataballa</td><td>1998-02-05</td></tr><tr><td>Diana Lorentz</td><td>1999-02-07</td></tr><tr><td>John Chen</td><td>1997-09-28</td></tr><tr><td>Ismael Sciarra</td><td>1997-09-30</td></tr><tr><td>Jose Manuel Urman</td><td>1998-03-07</td></tr><tr><td>Luis Popp</td><td>1999-12-07</td></tr><tr><td>Shelli Baida</td><td>1997-12-24</td></tr><tr><td>Guy Himuro</td><td>1998-11-15</td></tr><tr><td>Karen Colmenares</td><td>1999-08-10</td></tr><tr><td>Shanta Vollman</td><td>1997-10-10</td></tr><tr><td>Irene Mikkilineni</td><td>1998-09-28</td></tr><tr><td>Jonathon Taylor</td><td>1998-03-24</td></tr><tr><td>Jack Livingston</td><td>1998-04-23</td></tr><tr><td>Kimberely Grant</td><td>1999-05-24</td></tr><tr><td>Charles Johnson</td><td>2000-01-04</td></tr></table>"
                    },
                    "metadata": {}
                }
            ],
            "execution_count": 2
        },
        {
            "cell_type": "markdown",
            "source": [
                "_Altering tables_\n",
                "\n",
                "3. Create a new column in 'employees' for full name"
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "0a76c0e4-22ad-4840-9299-87630b4d69ce"
            },
            "attachments": {}
        },
        {
            "cell_type": "code",
            "source": [
                "--Since we will be using the full name of employees quite often, I decided to save the full name of employees as a new column\n",
                "ALTER TABLE [master].[dbo].[employees] --Indicating that we want to alter an existing table\n",
                "ADD full_name TEXT --Adding a new column to the exisiting table"
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "4f95c75c-0ba8-409e-b715-78559b44ad82",
                "tags": []
            },
            "outputs": [
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "Commands completed successfully."
                    },
                    "metadata": {}
                },
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "Total execution time: 00:00:00.064"
                    },
                    "metadata": {}
                }
            ],
            "execution_count": 8
        },
        {
            "cell_type": "code",
            "source": [
                "UPDATE [master].[dbo].[employees] --Indicating that we want to update the named table\n",
                "SET full_name = CONCAT(employees.first_name, ' ', employees.last_name) --Inserting data into the new 'full_name' column\n",
                "\n",
                "--Print out top three lines to ensure the code did what we needed it to do\n",
                "SELECT TOP (3) employee_id, first_name, last_name, full_name\n",
                "FROM employees"
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "40b6d1ad-3c10-40f3-9498-0c17a5b72edb",
                "tags": []
            },
            "outputs": [
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "(40 rows affected)"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "(3 rows affected)"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "Total execution time: 00:00:00.009"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "execute_result",
                    "execution_count": 11,
                    "data": {
                        "application/vnd.dataresource+json": {
                            "schema": {
                                "fields": [
                                    {
                                        "name": "employee_id"
                                    },
                                    {
                                        "name": "first_name"
                                    },
                                    {
                                        "name": "last_name"
                                    },
                                    {
                                        "name": "full_name"
                                    }
                                ]
                            },
                            "data": [
                                {
                                    "0": "100",
                                    "1": "Steven",
                                    "2": "King",
                                    "3": "Steven King"
                                },
                                {
                                    "0": "101",
                                    "1": "Neena",
                                    "2": "Kochhar",
                                    "3": "Neena Kochhar"
                                },
                                {
                                    "0": "102",
                                    "1": "Lex",
                                    "2": "De Haan",
                                    "3": "Lex De Haan"
                                }
                            ]
                        },
                        "text/html": "<table><tr><th>employee_id</th><th>first_name</th><th>last_name</th><th>full_name</th></tr><tr><td>100</td><td>Steven</td><td>King</td><td>Steven King</td></tr><tr><td>101</td><td>Neena</td><td>Kochhar</td><td>Neena Kochhar</td></tr><tr><td>102</td><td>Lex</td><td>De Haan</td><td>Lex De Haan</td></tr></table>"
                    },
                    "metadata": {}
                }
            ],
            "execution_count": 11
        },
        {
            "cell_type": "markdown",
            "source": [
                "_Filtering and Joining_\n",
                "\n",
                "4. What job titles are within the Finance department?"
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "70a26192-823e-4e72-a491-827085084518"
            },
            "attachments": {}
        },
        {
            "cell_type": "code",
            "source": [
                "--What is the department ID for the Finance department?\n",
                "SELECT *\n",
                "FROM departments\n",
                "WHERE department_name = 'Finance' --Only return lines where this condition is satisfied\n",
                "--The department_id for Finance is 10."
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "f1d61706-d19d-45df-be45-aaf3f39541c6"
            },
            "outputs": [
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "(1 row affected)"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "Total execution time: 00:00:00.024"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "execute_result",
                    "execution_count": 13,
                    "data": {
                        "application/vnd.dataresource+json": {
                            "schema": {
                                "fields": [
                                    {
                                        "name": "department_id"
                                    },
                                    {
                                        "name": "department_name"
                                    },
                                    {
                                        "name": "location_id"
                                    }
                                ]
                            },
                            "data": [
                                {
                                    "0": "10",
                                    "1": "Finance",
                                    "2": "1700"
                                }
                            ]
                        },
                        "text/html": "<table><tr><th>department_id</th><th>department_name</th><th>location_id</th></tr><tr><td>10</td><td>Finance</td><td>1700</td></tr></table>"
                    },
                    "metadata": {}
                }
            ],
            "execution_count": 13
        },
        {
            "cell_type": "code",
            "source": [
                "--METHOD 1, simple queries\n",
                "--Find all job_id's for everyone in the Finance department\n",
                "SELECT DISTINCT(job_id) --Find unique job ID's within rows where department_id equals 10\n",
                "FROM employees\n",
                "WHERE department_id = 10\n",
                "--7 and 6 are the two job_id's within the Finance department\n",
                "\n",
                "--Find the job titles for job_id's 7 and 6\n",
                "SELECT job_title AS finance_jobs\n",
                "FROM jobs\n",
                "WHERE job_id = 7 OR job_id = 6\n",
                "-- Accountant and Finance Manager are the two titles held in the Finance department\n",
                ""
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "20783abc-71c2-4940-94cc-536d0135fe1b"
            },
            "outputs": [
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "(2 rows affected)"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "(2 rows affected)"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "Total execution time: 00:00:00.016"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "execute_result",
                    "execution_count": 14,
                    "data": {
                        "application/vnd.dataresource+json": {
                            "schema": {
                                "fields": [
                                    {
                                        "name": "job_id"
                                    }
                                ]
                            },
                            "data": [
                                {
                                    "0": "6"
                                },
                                {
                                    "0": "7"
                                }
                            ]
                        },
                        "text/html": "<table><tr><th>job_id</th></tr><tr><td>6</td></tr><tr><td>7</td></tr></table>"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "execute_result",
                    "execution_count": 14,
                    "data": {
                        "application/vnd.dataresource+json": {
                            "schema": {
                                "fields": [
                                    {
                                        "name": "finance_jobs"
                                    }
                                ]
                            },
                            "data": [
                                {
                                    "0": "Accountant"
                                },
                                {
                                    "0": "Finance Manager"
                                }
                            ]
                        },
                        "text/html": "<table><tr><th>finance_jobs</th></tr><tr><td>Accountant</td></tr><tr><td>Finance Manager</td></tr></table>"
                    },
                    "metadata": {}
                }
            ],
            "execution_count": 14
        },
        {
            "cell_type": "code",
            "source": [
                "--METHOD 2, join\n",
                "SELECT DISTINCT(jobs.job_title) AS finance_jobs\n",
                "FROM employees\n",
                "JOIN jobs ON employees.job_id = jobs.job_id --Join two tables with the foreign key of `employees`, job_id\n",
                "WHERE employees.department_id = 10"
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "3833c2dc-8d5a-4f8f-954b-74259f56bd70"
            },
            "outputs": [
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "(2 rows affected)"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "Total execution time: 00:00:00.010"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "execute_result",
                    "execution_count": 15,
                    "data": {
                        "application/vnd.dataresource+json": {
                            "schema": {
                                "fields": [
                                    {
                                        "name": "finance_jobs"
                                    }
                                ]
                            },
                            "data": [
                                {
                                    "0": "Accountant"
                                },
                                {
                                    "0": "Finance Manager"
                                }
                            ]
                        },
                        "text/html": "<table><tr><th>finance_jobs</th></tr><tr><td>Accountant</td></tr><tr><td>Finance Manager</td></tr></table>"
                    },
                    "metadata": {}
                }
            ],
            "execution_count": 15
        },
        {
            "cell_type": "markdown",
            "source": [
                "5\\. Which employees have first names OR last names that do not start with the letters 'D' or 'S'? Return their hire date, salary, and department."
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "206ffd76-d70e-42c1-ae43-e0a9743110c6"
            },
            "attachments": {}
        },
        {
            "cell_type": "code",
            "source": [
                "SELECT employees.full_name, employees.hire_date, employees.salary, departments.department_name\n",
                "FROM employees\n",
                "JOIN departments on employees.department_id = departments.department_id\n",
                "WHERE employees.first_name NOT LIKE 'D%' AND --Find values that start with D or S and DO NOT include them in the result\n",
                "        employees.first_name NOT LIKE 'S%' AND\n",
                "        employees.last_name NOT LIKE 'D%' AND\n",
                "        employees.last_name NOT LIKE 'S%'"
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "15003ad1-560d-4491-9d4c-5f2f60c38530"
            },
            "outputs": [
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "(27 rows affected)"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "Total execution time: 00:00:00.029"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "execute_result",
                    "execution_count": 1,
                    "data": {
                        "application/vnd.dataresource+json": {
                            "schema": {
                                "fields": [
                                    {
                                        "name": "full_name"
                                    },
                                    {
                                        "name": "hire_date"
                                    },
                                    {
                                        "name": "salary"
                                    },
                                    {
                                        "name": "department_name"
                                    }
                                ]
                            },
                            "data": [
                                {
                                    "0": "Neena Kochhar",
                                    "1": "1989-09-21",
                                    "2": "17000.00",
                                    "3": "Executive"
                                },
                                {
                                    "0": "Alexander Hunold",
                                    "1": "1990-01-03",
                                    "2": "9000.00",
                                    "3": "IT"
                                },
                                {
                                    "0": "Bruce Ernst",
                                    "1": "1991-05-21",
                                    "2": "6000.00",
                                    "3": "IT"
                                },
                                {
                                    "0": "Valli Pataballa",
                                    "1": "1998-02-05",
                                    "2": "4800.00",
                                    "3": "IT"
                                },
                                {
                                    "0": "Nancy Greenberg",
                                    "1": "1994-08-17",
                                    "2": "12000.00",
                                    "3": "Finance"
                                },
                                {
                                    "0": "John Chen",
                                    "1": "1997-09-28",
                                    "2": "8200.00",
                                    "3": "Finance"
                                },
                                {
                                    "0": "Jose Manuel Urman",
                                    "1": "1998-03-07",
                                    "2": "7800.00",
                                    "3": "Finance"
                                },
                                {
                                    "0": "Luis Popp",
                                    "1": "1999-12-07",
                                    "2": "6900.00",
                                    "3": "Finance"
                                },
                                {
                                    "0": "Alexander Khoo",
                                    "1": "1995-05-18",
                                    "2": "3100.00",
                                    "3": "Purchasing"
                                },
                                {
                                    "0": "Guy Himuro",
                                    "1": "1998-11-15",
                                    "2": "2600.00",
                                    "3": "Purchasing"
                                },
                                {
                                    "0": "Karen Colmenares",
                                    "1": "1999-08-10",
                                    "2": "2500.00",
                                    "3": "Purchasing"
                                },
                                {
                                    "0": "Matthew Weiss",
                                    "1": "1996-07-18",
                                    "2": "8000.00",
                                    "3": "Shipping"
                                },
                                {
                                    "0": "Adam Fripp",
                                    "1": "1997-04-10",
                                    "2": "8200.00",
                                    "3": "Shipping"
                                },
                                {
                                    "0": "Payam Kaufling",
                                    "1": "1995-05-01",
                                    "2": "7900.00",
                                    "3": "Shipping"
                                },
                                {
                                    "0": "Irene Mikkilineni",
                                    "1": "1998-09-28",
                                    "2": "2700.00",
                                    "3": "Shipping"
                                },
                                {
                                    "0": "John Russell",
                                    "1": "1996-10-01",
                                    "2": "14000.00",
                                    "3": "Sales"
                                },
                                {
                                    "0": "Karen Partners",
                                    "1": "1997-01-05",
                                    "2": "13500.00",
                                    "3": "Sales"
                                },
                                {
                                    "0": "Jonathon Taylor",
                                    "1": "1998-03-24",
                                    "2": "8600.00",
                                    "3": "Sales"
                                },
                                {
                                    "0": "Jack Livingston",
                                    "1": "1998-04-23",
                                    "2": "8400.00",
                                    "3": "Sales"
                                },
                                {
                                    "0": "Kimberely Grant",
                                    "1": "1999-05-24",
                                    "2": "7000.00",
                                    "3": "Sales"
                                },
                                {
                                    "0": "Charles Johnson",
                                    "1": "2000-01-04",
                                    "2": "6200.00",
                                    "3": "Sales"
                                },
                                {
                                    "0": "Britney Everett",
                                    "1": "1997-03-03",
                                    "2": "3900.00",
                                    "3": "Shipping"
                                },
                                {
                                    "0": "Jennifer Whalen",
                                    "1": "1987-09-17",
                                    "2": "4400.00",
                                    "3": "Administration"
                                },
                                {
                                    "0": "Michael Hartstein",
                                    "1": "1996-02-17",
                                    "2": "13000.00",
                                    "3": "Marketing"
                                },
                                {
                                    "0": "Pat Fay",
                                    "1": "1997-08-17",
                                    "2": "6000.00",
                                    "3": "Marketing"
                                },
                                {
                                    "0": "Hermann Baer",
                                    "1": "1994-06-07",
                                    "2": "10000.00",
                                    "3": "Public Relations"
                                },
                                {
                                    "0": "William Gietz",
                                    "1": "1994-06-07",
                                    "2": "8300.00",
                                    "3": "Accounting"
                                }
                            ]
                        },
                        "text/html": "<table><tr><th>full_name</th><th>hire_date</th><th>salary</th><th>department_name</th></tr><tr><td>Neena Kochhar</td><td>1989-09-21</td><td>17000.00</td><td>Executive</td></tr><tr><td>Alexander Hunold</td><td>1990-01-03</td><td>9000.00</td><td>IT</td></tr><tr><td>Bruce Ernst</td><td>1991-05-21</td><td>6000.00</td><td>IT</td></tr><tr><td>Valli Pataballa</td><td>1998-02-05</td><td>4800.00</td><td>IT</td></tr><tr><td>Nancy Greenberg</td><td>1994-08-17</td><td>12000.00</td><td>Finance</td></tr><tr><td>John Chen</td><td>1997-09-28</td><td>8200.00</td><td>Finance</td></tr><tr><td>Jose Manuel Urman</td><td>1998-03-07</td><td>7800.00</td><td>Finance</td></tr><tr><td>Luis Popp</td><td>1999-12-07</td><td>6900.00</td><td>Finance</td></tr><tr><td>Alexander Khoo</td><td>1995-05-18</td><td>3100.00</td><td>Purchasing</td></tr><tr><td>Guy Himuro</td><td>1998-11-15</td><td>2600.00</td><td>Purchasing</td></tr><tr><td>Karen Colmenares</td><td>1999-08-10</td><td>2500.00</td><td>Purchasing</td></tr><tr><td>Matthew Weiss</td><td>1996-07-18</td><td>8000.00</td><td>Shipping</td></tr><tr><td>Adam Fripp</td><td>1997-04-10</td><td>8200.00</td><td>Shipping</td></tr><tr><td>Payam Kaufling</td><td>1995-05-01</td><td>7900.00</td><td>Shipping</td></tr><tr><td>Irene Mikkilineni</td><td>1998-09-28</td><td>2700.00</td><td>Shipping</td></tr><tr><td>John Russell</td><td>1996-10-01</td><td>14000.00</td><td>Sales</td></tr><tr><td>Karen Partners</td><td>1997-01-05</td><td>13500.00</td><td>Sales</td></tr><tr><td>Jonathon Taylor</td><td>1998-03-24</td><td>8600.00</td><td>Sales</td></tr><tr><td>Jack Livingston</td><td>1998-04-23</td><td>8400.00</td><td>Sales</td></tr><tr><td>Kimberely Grant</td><td>1999-05-24</td><td>7000.00</td><td>Sales</td></tr><tr><td>Charles Johnson</td><td>2000-01-04</td><td>6200.00</td><td>Sales</td></tr><tr><td>Britney Everett</td><td>1997-03-03</td><td>3900.00</td><td>Shipping</td></tr><tr><td>Jennifer Whalen</td><td>1987-09-17</td><td>4400.00</td><td>Administration</td></tr><tr><td>Michael Hartstein</td><td>1996-02-17</td><td>13000.00</td><td>Marketing</td></tr><tr><td>Pat Fay</td><td>1997-08-17</td><td>6000.00</td><td>Marketing</td></tr><tr><td>Hermann Baer</td><td>1994-06-07</td><td>10000.00</td><td>Public Relations</td></tr><tr><td>William Gietz</td><td>1994-06-07</td><td>8300.00</td><td>Accounting</td></tr></table>"
                    },
                    "metadata": {}
                }
            ],
            "execution_count": 1
        },
        {
            "cell_type": "markdown",
            "source": [
                "_Grouping_\n",
                "\n",
                "6\\. Which location has the most employees?"
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "244fcba6-0f7b-4a87-b905-de15ad0e7f67"
            },
            "attachments": {}
        },
        {
            "cell_type": "code",
            "source": [
                "--Which is the biggest department?\n",
                "SELECT TOP 1 E.department_id, D.department_name, COUNT(*) AS employee_count --Return the first row, after ordering the results where the highest employee_count is first in line 7\n",
                "FROM employees E --Setting an alias, 'E', for employees so I do not have to repeatedly type the whole name of the table when specifying what table the column name is found\n",
                "JOIN departments D\n",
                "ON E.department_id = D.department_id\n",
                "GROUP BY E.department_id, D.department_name --Since employee_count is computed using the aggregate function, `COUNT`, I need to aggregate department ID and name\n",
                "ORDER BY employee_count DESC\n",
                "--The Shipping department has the most employees at 7 employees\n",
                "\n",
                "--Where is the biggest department?\n",
                "SELECT D.department_name, L.city, L.country_id\n",
                "FROM departments D\n",
                "JOIN locations L ON D.location_id = L.location_id\n",
                "WHERE department_id = 5\n",
                "--Shipping in South San Francisco, US is the largest department"
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "9f618af1-a9a5-4f05-9577-9b9faf1b8eb3"
            },
            "outputs": [
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "(1 row affected)"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "(1 row affected)"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "Total execution time: 00:00:00.014"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "execute_result",
                    "execution_count": 12,
                    "data": {
                        "application/vnd.dataresource+json": {
                            "schema": {
                                "fields": [
                                    {
                                        "name": "department_id"
                                    },
                                    {
                                        "name": "department_name"
                                    },
                                    {
                                        "name": "employee_count"
                                    }
                                ]
                            },
                            "data": [
                                {
                                    "0": "5",
                                    "1": "Shipping",
                                    "2": "7"
                                }
                            ]
                        },
                        "text/html": "<table><tr><th>department_id</th><th>department_name</th><th>employee_count</th></tr><tr><td>5</td><td>Shipping</td><td>7</td></tr></table>"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "execute_result",
                    "execution_count": 12,
                    "data": {
                        "application/vnd.dataresource+json": {
                            "schema": {
                                "fields": [
                                    {
                                        "name": "department_name"
                                    },
                                    {
                                        "name": "city"
                                    },
                                    {
                                        "name": "country_id"
                                    }
                                ]
                            },
                            "data": [
                                {
                                    "0": "Shipping",
                                    "1": "South San Francisco",
                                    "2": "US"
                                }
                            ]
                        },
                        "text/html": "<table><tr><th>department_name</th><th>city</th><th>country_id</th></tr><tr><td>Shipping</td><td>South San Francisco</td><td>US</td></tr></table>"
                    },
                    "metadata": {}
                }
            ],
            "execution_count": 12
        },
        {
            "cell_type": "markdown",
            "source": [
                "7\\. Which department has the most managers?"
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "0e81e770-f5a1-42a4-b878-4f3f99e20ab8"
            },
            "attachments": {}
        },
        {
            "cell_type": "code",
            "source": [
                "SELECT TOP 1 E.department_id, D.department_name, COUNT(DISTINCT(E.manager_id)) manager_count --Return the first row, after ordering the count of unique managers from highest to lowest in line 5.\n",
                "FROM employees E\n",
                "JOIN departments D ON E.department_id = D.department_id --Joining the two tables to find the department name from the department ID\n",
                "GROUP BY E.department_id, D.department_name --Since employee_count is computed using the aggregate function, `COUNT`, I need to aggregate department ID and name\n",
                "ORDER BY manager_count DESC"
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "5d56a21b-1fbb-4f91-b835-2b68f4cab6c8",
                "tags": []
            },
            "outputs": [
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "Warning: Null value is eliminated by an aggregate or other SET operation."
                    },
                    "metadata": {}
                },
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "(1 row affected)"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "Total execution time: 00:00:00.009"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "execute_result",
                    "execution_count": 28,
                    "data": {
                        "application/vnd.dataresource+json": {
                            "schema": {
                                "fields": [
                                    {
                                        "name": "department_id"
                                    },
                                    {
                                        "name": "department_name"
                                    },
                                    {
                                        "name": "manager_count"
                                    }
                                ]
                            },
                            "data": [
                                {
                                    "0": "5",
                                    "1": "Shipping",
                                    "2": "3"
                                }
                            ]
                        },
                        "text/html": "<table><tr><th>department_id</th><th>department_name</th><th>manager_count</th></tr><tr><td>5</td><td>Shipping</td><td>3</td></tr></table>"
                    },
                    "metadata": {}
                }
            ],
            "execution_count": 28
        },
        {
            "cell_type": "markdown",
            "source": [
                "_Temporary Table_\n",
                "\n",
                "8\\. What are the new salaries of all employees, based on their titles?"
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "080294ee-b18e-4363-968d-ab4f75f4a96c"
            },
            "attachments": {}
        },
        {
            "cell_type": "code",
            "source": [
                "DROP TABLE IF EXISTS #raises --If I rerun the temporary table code below, I would get an error saying that the table already exists. \n",
                "                                --Dropping the table if it exists will allow me to create the table again without issue.\n",
                "\n",
                "SELECT job_id, job_title,\n",
                "    (CASE\n",
                "        WHEN [job_title] LIKE '%President%' OR\n",
                "            [job_title] LIKE '%Manager%'\n",
                "            THEN 0.05\n",
                "        ELSE 0.03 END) AS percent_inc --If the job title includes \"President\" or \"Manager\" in any position of the job title, then assign a 5% increase. Otherwise, assign a 3% increase.\n",
                "INTO #raises --Save the above query into a temporary table named \"raises\"\n",
                "FROM jobs\n",
                "\n",
                "SELECT E.employee_id, E.full_name, E.job_id, E.salary AS old_salary, R.percent_inc, (E.salary + E.salary*R.percent_inc) AS new_salary --Calculating new salary from information saved in the temporary table.\n",
                "FROM employees E\n",
                "JOIN #raises R ON E.job_id = R.job_id"
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "e6a8a4c0-cecd-4653-9f60-94301d53ba41",
                "tags": []
            },
            "outputs": [
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "(19 rows affected)"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "(40 rows affected)"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "Total execution time: 00:00:00.034"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "execute_result",
                    "execution_count": 2,
                    "data": {
                        "application/vnd.dataresource+json": {
                            "schema": {
                                "fields": [
                                    {
                                        "name": "employee_id"
                                    },
                                    {
                                        "name": "full_name"
                                    },
                                    {
                                        "name": "job_id"
                                    },
                                    {
                                        "name": "old_salary"
                                    },
                                    {
                                        "name": "percent_inc"
                                    },
                                    {
                                        "name": "new_salary"
                                    }
                                ]
                            },
                            "data": [
                                {
                                    "0": "100",
                                    "1": "Steven King",
                                    "2": "4",
                                    "3": "24000.00",
                                    "4": "0.05",
                                    "5": "25200.0000"
                                },
                                {
                                    "0": "101",
                                    "1": "Neena Kochhar",
                                    "2": "5",
                                    "3": "17000.00",
                                    "4": "0.05",
                                    "5": "17850.0000"
                                },
                                {
                                    "0": "102",
                                    "1": "Lex De Haan",
                                    "2": "5",
                                    "3": "17000.00",
                                    "4": "0.05",
                                    "5": "17850.0000"
                                },
                                {
                                    "0": "103",
                                    "1": "Alexander Hunold",
                                    "2": "9",
                                    "3": "9000.00",
                                    "4": "0.03",
                                    "5": "9270.0000"
                                },
                                {
                                    "0": "104",
                                    "1": "Bruce Ernst",
                                    "2": "9",
                                    "3": "6000.00",
                                    "4": "0.03",
                                    "5": "6180.0000"
                                },
                                {
                                    "0": "105",
                                    "1": "David Austin",
                                    "2": "9",
                                    "3": "4800.00",
                                    "4": "0.03",
                                    "5": "4944.0000"
                                },
                                {
                                    "0": "106",
                                    "1": "Valli Pataballa",
                                    "2": "9",
                                    "3": "4800.00",
                                    "4": "0.03",
                                    "5": "4944.0000"
                                },
                                {
                                    "0": "107",
                                    "1": "Diana Lorentz",
                                    "2": "9",
                                    "3": "4200.00",
                                    "4": "0.03",
                                    "5": "4326.0000"
                                },
                                {
                                    "0": "108",
                                    "1": "Nancy Greenberg",
                                    "2": "7",
                                    "3": "12000.00",
                                    "4": "0.05",
                                    "5": "12600.0000"
                                },
                                {
                                    "0": "109",
                                    "1": "Daniel Faviet",
                                    "2": "6",
                                    "3": "9000.00",
                                    "4": "0.03",
                                    "5": "9270.0000"
                                },
                                {
                                    "0": "110",
                                    "1": "John Chen",
                                    "2": "6",
                                    "3": "8200.00",
                                    "4": "0.03",
                                    "5": "8446.0000"
                                },
                                {
                                    "0": "111",
                                    "1": "Ismael Sciarra",
                                    "2": "6",
                                    "3": "7700.00",
                                    "4": "0.03",
                                    "5": "7931.0000"
                                },
                                {
                                    "0": "112",
                                    "1": "Jose Manuel Urman",
                                    "2": "6",
                                    "3": "7800.00",
                                    "4": "0.03",
                                    "5": "8034.0000"
                                },
                                {
                                    "0": "113",
                                    "1": "Luis Popp",
                                    "2": "6",
                                    "3": "6900.00",
                                    "4": "0.03",
                                    "5": "7107.0000"
                                },
                                {
                                    "0": "114",
                                    "1": "Den Raphaely",
                                    "2": "14",
                                    "3": "11000.00",
                                    "4": "0.05",
                                    "5": "11550.0000"
                                },
                                {
                                    "0": "115",
                                    "1": "Alexander Khoo",
                                    "2": "13",
                                    "3": "3100.00",
                                    "4": "0.03",
                                    "5": "3193.0000"
                                },
                                {
                                    "0": "116",
                                    "1": "Shelli Baida",
                                    "2": "13",
                                    "3": "2900.00",
                                    "4": "0.03",
                                    "5": "2987.0000"
                                },
                                {
                                    "0": "117",
                                    "1": "Sigal Tobias",
                                    "2": "13",
                                    "3": "2800.00",
                                    "4": "0.03",
                                    "5": "2884.0000"
                                },
                                {
                                    "0": "118",
                                    "1": "Guy Himuro",
                                    "2": "13",
                                    "3": "2600.00",
                                    "4": "0.03",
                                    "5": "2678.0000"
                                },
                                {
                                    "0": "119",
                                    "1": "Karen Colmenares",
                                    "2": "13",
                                    "3": "2500.00",
                                    "4": "0.03",
                                    "5": "2575.0000"
                                },
                                {
                                    "0": "120",
                                    "1": "Matthew Weiss",
                                    "2": "19",
                                    "3": "8000.00",
                                    "4": "0.05",
                                    "5": "8400.0000"
                                },
                                {
                                    "0": "121",
                                    "1": "Adam Fripp",
                                    "2": "19",
                                    "3": "8200.00",
                                    "4": "0.05",
                                    "5": "8610.0000"
                                },
                                {
                                    "0": "122",
                                    "1": "Payam Kaufling",
                                    "2": "19",
                                    "3": "7900.00",
                                    "4": "0.05",
                                    "5": "8295.0000"
                                },
                                {
                                    "0": "123",
                                    "1": "Shanta Vollman",
                                    "2": "19",
                                    "3": "6500.00",
                                    "4": "0.05",
                                    "5": "6825.0000"
                                },
                                {
                                    "0": "126",
                                    "1": "Irene Mikkilineni",
                                    "2": "18",
                                    "3": "2700.00",
                                    "4": "0.03",
                                    "5": "2781.0000"
                                },
                                {
                                    "0": "145",
                                    "1": "John Russell",
                                    "2": "15",
                                    "3": "14000.00",
                                    "4": "0.05",
                                    "5": "14700.0000"
                                },
                                {
                                    "0": "146",
                                    "1": "Karen Partners",
                                    "2": "15",
                                    "3": "13500.00",
                                    "4": "0.05",
                                    "5": "14175.0000"
                                },
                                {
                                    "0": "176",
                                    "1": "Jonathon Taylor",
                                    "2": "16",
                                    "3": "8600.00",
                                    "4": "0.03",
                                    "5": "8858.0000"
                                },
                                {
                                    "0": "177",
                                    "1": "Jack Livingston",
                                    "2": "16",
                                    "3": "8400.00",
                                    "4": "0.03",
                                    "5": "8652.0000"
                                },
                                {
                                    "0": "178",
                                    "1": "Kimberely Grant",
                                    "2": "16",
                                    "3": "7000.00",
                                    "4": "0.03",
                                    "5": "7210.0000"
                                },
                                {
                                    "0": "179",
                                    "1": "Charles Johnson",
                                    "2": "16",
                                    "3": "6200.00",
                                    "4": "0.03",
                                    "5": "6386.0000"
                                },
                                {
                                    "0": "192",
                                    "1": "Sarah Bell",
                                    "2": "17",
                                    "3": "4000.00",
                                    "4": "0.03",
                                    "5": "4120.0000"
                                },
                                {
                                    "0": "193",
                                    "1": "Britney Everett",
                                    "2": "17",
                                    "3": "3900.00",
                                    "4": "0.03",
                                    "5": "4017.0000"
                                },
                                {
                                    "0": "200",
                                    "1": "Jennifer Whalen",
                                    "2": "3",
                                    "3": "4400.00",
                                    "4": "0.03",
                                    "5": "4532.0000"
                                },
                                {
                                    "0": "201",
                                    "1": "Michael Hartstein",
                                    "2": "10",
                                    "3": "13000.00",
                                    "4": "0.05",
                                    "5": "13650.0000"
                                },
                                {
                                    "0": "202",
                                    "1": "Pat Fay",
                                    "2": "11",
                                    "3": "6000.00",
                                    "4": "0.03",
                                    "5": "6180.0000"
                                },
                                {
                                    "0": "203",
                                    "1": "Susan Mavris",
                                    "2": "8",
                                    "3": "6500.00",
                                    "4": "0.03",
                                    "5": "6695.0000"
                                },
                                {
                                    "0": "204",
                                    "1": "Hermann Baer",
                                    "2": "12",
                                    "3": "10000.00",
                                    "4": "0.03",
                                    "5": "10300.0000"
                                },
                                {
                                    "0": "205",
                                    "1": "Shelley Higgins",
                                    "2": "2",
                                    "3": "12000.00",
                                    "4": "0.05",
                                    "5": "12600.0000"
                                },
                                {
                                    "0": "206",
                                    "1": "William Gietz",
                                    "2": "1",
                                    "3": "8300.00",
                                    "4": "0.03",
                                    "5": "8549.0000"
                                }
                            ]
                        },
                        "text/html": "<table><tr><th>employee_id</th><th>full_name</th><th>job_id</th><th>old_salary</th><th>percent_inc</th><th>new_salary</th></tr><tr><td>100</td><td>Steven King</td><td>4</td><td>24000.00</td><td>0.05</td><td>25200.0000</td></tr><tr><td>101</td><td>Neena Kochhar</td><td>5</td><td>17000.00</td><td>0.05</td><td>17850.0000</td></tr><tr><td>102</td><td>Lex De Haan</td><td>5</td><td>17000.00</td><td>0.05</td><td>17850.0000</td></tr><tr><td>103</td><td>Alexander Hunold</td><td>9</td><td>9000.00</td><td>0.03</td><td>9270.0000</td></tr><tr><td>104</td><td>Bruce Ernst</td><td>9</td><td>6000.00</td><td>0.03</td><td>6180.0000</td></tr><tr><td>105</td><td>David Austin</td><td>9</td><td>4800.00</td><td>0.03</td><td>4944.0000</td></tr><tr><td>106</td><td>Valli Pataballa</td><td>9</td><td>4800.00</td><td>0.03</td><td>4944.0000</td></tr><tr><td>107</td><td>Diana Lorentz</td><td>9</td><td>4200.00</td><td>0.03</td><td>4326.0000</td></tr><tr><td>108</td><td>Nancy Greenberg</td><td>7</td><td>12000.00</td><td>0.05</td><td>12600.0000</td></tr><tr><td>109</td><td>Daniel Faviet</td><td>6</td><td>9000.00</td><td>0.03</td><td>9270.0000</td></tr><tr><td>110</td><td>John Chen</td><td>6</td><td>8200.00</td><td>0.03</td><td>8446.0000</td></tr><tr><td>111</td><td>Ismael Sciarra</td><td>6</td><td>7700.00</td><td>0.03</td><td>7931.0000</td></tr><tr><td>112</td><td>Jose Manuel Urman</td><td>6</td><td>7800.00</td><td>0.03</td><td>8034.0000</td></tr><tr><td>113</td><td>Luis Popp</td><td>6</td><td>6900.00</td><td>0.03</td><td>7107.0000</td></tr><tr><td>114</td><td>Den Raphaely</td><td>14</td><td>11000.00</td><td>0.05</td><td>11550.0000</td></tr><tr><td>115</td><td>Alexander Khoo</td><td>13</td><td>3100.00</td><td>0.03</td><td>3193.0000</td></tr><tr><td>116</td><td>Shelli Baida</td><td>13</td><td>2900.00</td><td>0.03</td><td>2987.0000</td></tr><tr><td>117</td><td>Sigal Tobias</td><td>13</td><td>2800.00</td><td>0.03</td><td>2884.0000</td></tr><tr><td>118</td><td>Guy Himuro</td><td>13</td><td>2600.00</td><td>0.03</td><td>2678.0000</td></tr><tr><td>119</td><td>Karen Colmenares</td><td>13</td><td>2500.00</td><td>0.03</td><td>2575.0000</td></tr><tr><td>120</td><td>Matthew Weiss</td><td>19</td><td>8000.00</td><td>0.05</td><td>8400.0000</td></tr><tr><td>121</td><td>Adam Fripp</td><td>19</td><td>8200.00</td><td>0.05</td><td>8610.0000</td></tr><tr><td>122</td><td>Payam Kaufling</td><td>19</td><td>7900.00</td><td>0.05</td><td>8295.0000</td></tr><tr><td>123</td><td>Shanta Vollman</td><td>19</td><td>6500.00</td><td>0.05</td><td>6825.0000</td></tr><tr><td>126</td><td>Irene Mikkilineni</td><td>18</td><td>2700.00</td><td>0.03</td><td>2781.0000</td></tr><tr><td>145</td><td>John Russell</td><td>15</td><td>14000.00</td><td>0.05</td><td>14700.0000</td></tr><tr><td>146</td><td>Karen Partners</td><td>15</td><td>13500.00</td><td>0.05</td><td>14175.0000</td></tr><tr><td>176</td><td>Jonathon Taylor</td><td>16</td><td>8600.00</td><td>0.03</td><td>8858.0000</td></tr><tr><td>177</td><td>Jack Livingston</td><td>16</td><td>8400.00</td><td>0.03</td><td>8652.0000</td></tr><tr><td>178</td><td>Kimberely Grant</td><td>16</td><td>7000.00</td><td>0.03</td><td>7210.0000</td></tr><tr><td>179</td><td>Charles Johnson</td><td>16</td><td>6200.00</td><td>0.03</td><td>6386.0000</td></tr><tr><td>192</td><td>Sarah Bell</td><td>17</td><td>4000.00</td><td>0.03</td><td>4120.0000</td></tr><tr><td>193</td><td>Britney Everett</td><td>17</td><td>3900.00</td><td>0.03</td><td>4017.0000</td></tr><tr><td>200</td><td>Jennifer Whalen</td><td>3</td><td>4400.00</td><td>0.03</td><td>4532.0000</td></tr><tr><td>201</td><td>Michael Hartstein</td><td>10</td><td>13000.00</td><td>0.05</td><td>13650.0000</td></tr><tr><td>202</td><td>Pat Fay</td><td>11</td><td>6000.00</td><td>0.03</td><td>6180.0000</td></tr><tr><td>203</td><td>Susan Mavris</td><td>8</td><td>6500.00</td><td>0.03</td><td>6695.0000</td></tr><tr><td>204</td><td>Hermann Baer</td><td>12</td><td>10000.00</td><td>0.03</td><td>10300.0000</td></tr><tr><td>205</td><td>Shelley Higgins</td><td>2</td><td>12000.00</td><td>0.05</td><td>12600.0000</td></tr><tr><td>206</td><td>William Gietz</td><td>1</td><td>8300.00</td><td>0.03</td><td>8549.0000</td></tr></table>"
                    },
                    "metadata": {}
                }
            ],
            "execution_count": 2
        },
        {
            "cell_type": "markdown",
            "source": [
                "_Recursive Queries_\n",
                "\n",
                "9\\. Find the hierarchy of employees under a given manager \"Neena Kochhar\""
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "f5e046e6-4c5f-44b4-8930-64602de6a9c2"
            },
            "attachments": {}
        },
        {
            "cell_type": "code",
            "source": [
                "WITH emp_hierarchy AS --Naming the CTE table\n",
                "    (SELECT employee_id, full_name, manager_id, job_id, 1 as level --Assigning level 1 (top of the chain) to the employee, Neena, in the base query.\n",
                "    FROM employees WHERE first_name = 'Neena'\n",
                "    UNION ALL --Merging the two queries\n",
                "    SELECT E.employee_id, E.full_name, E.manager_id, E.job_id, H.level + 1 AS level --The recursive query will add 1 to the level of the previous iteration.\n",
                "    FROM emp_hierarchy H\n",
                "    JOIN employees E ON H.employee_id = E.manager_id) --Setting the employee ID to the manager ID so we can find rows where the employee of \n",
                "                                                        --the previous iteration of the recursive query is the manager of the current employee.\n",
                "                                                        --The recursive query will terminate when the employee ID of the last iteration does not appear as a manager ID for any other rows.\n",
                "SELECT H2.employee_id, H2.full_name AS employee_name, E2.full_name AS manager_name, H2.level AS level --Choosing and assigning an alias to columns from CTE to return\n",
                "FROM emp_hierarchy H2\n",
                "JOIN employees E2 ON E2.employee_id = H2.manager_id --Find the full names of those who are in the CTE above"
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "7316d801-486d-438e-bee0-ca302940a58c"
            },
            "outputs": [
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "(12 rows affected)"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "Total execution time: 00:00:00.029"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "execute_result",
                    "execution_count": 38,
                    "data": {
                        "application/vnd.dataresource+json": {
                            "schema": {
                                "fields": [
                                    {
                                        "name": "employee_id"
                                    },
                                    {
                                        "name": "employee_name"
                                    },
                                    {
                                        "name": "manager_name"
                                    },
                                    {
                                        "name": "level"
                                    }
                                ]
                            },
                            "data": [
                                {
                                    "0": "101",
                                    "1": "Neena Kochhar",
                                    "2": "Steven King",
                                    "3": "1"
                                },
                                {
                                    "0": "108",
                                    "1": "Nancy Greenberg",
                                    "2": "Neena Kochhar",
                                    "3": "2"
                                },
                                {
                                    "0": "200",
                                    "1": "Jennifer Whalen",
                                    "2": "Neena Kochhar",
                                    "3": "2"
                                },
                                {
                                    "0": "203",
                                    "1": "Susan Mavris",
                                    "2": "Neena Kochhar",
                                    "3": "2"
                                },
                                {
                                    "0": "204",
                                    "1": "Hermann Baer",
                                    "2": "Neena Kochhar",
                                    "3": "2"
                                },
                                {
                                    "0": "205",
                                    "1": "Shelley Higgins",
                                    "2": "Neena Kochhar",
                                    "3": "2"
                                },
                                {
                                    "0": "206",
                                    "1": "William Gietz",
                                    "2": "Shelley Higgins",
                                    "3": "3"
                                },
                                {
                                    "0": "109",
                                    "1": "Daniel Faviet",
                                    "2": "Nancy Greenberg",
                                    "3": "3"
                                },
                                {
                                    "0": "110",
                                    "1": "John Chen",
                                    "2": "Nancy Greenberg",
                                    "3": "3"
                                },
                                {
                                    "0": "111",
                                    "1": "Ismael Sciarra",
                                    "2": "Nancy Greenberg",
                                    "3": "3"
                                },
                                {
                                    "0": "112",
                                    "1": "Jose Manuel Urman",
                                    "2": "Nancy Greenberg",
                                    "3": "3"
                                },
                                {
                                    "0": "113",
                                    "1": "Luis Popp",
                                    "2": "Nancy Greenberg",
                                    "3": "3"
                                }
                            ]
                        },
                        "text/html": "<table><tr><th>employee_id</th><th>employee_name</th><th>manager_name</th><th>level</th></tr><tr><td>101</td><td>Neena Kochhar</td><td>Steven King</td><td>1</td></tr><tr><td>108</td><td>Nancy Greenberg</td><td>Neena Kochhar</td><td>2</td></tr><tr><td>200</td><td>Jennifer Whalen</td><td>Neena Kochhar</td><td>2</td></tr><tr><td>203</td><td>Susan Mavris</td><td>Neena Kochhar</td><td>2</td></tr><tr><td>204</td><td>Hermann Baer</td><td>Neena Kochhar</td><td>2</td></tr><tr><td>205</td><td>Shelley Higgins</td><td>Neena Kochhar</td><td>2</td></tr><tr><td>206</td><td>William Gietz</td><td>Shelley Higgins</td><td>3</td></tr><tr><td>109</td><td>Daniel Faviet</td><td>Nancy Greenberg</td><td>3</td></tr><tr><td>110</td><td>John Chen</td><td>Nancy Greenberg</td><td>3</td></tr><tr><td>111</td><td>Ismael Sciarra</td><td>Nancy Greenberg</td><td>3</td></tr><tr><td>112</td><td>Jose Manuel Urman</td><td>Nancy Greenberg</td><td>3</td></tr><tr><td>113</td><td>Luis Popp</td><td>Nancy Greenberg</td><td>3</td></tr></table>"
                    },
                    "metadata": {}
                }
            ],
            "execution_count": 38
        },
        {
            "cell_type": "markdown",
            "source": [
                "_Common Table Expression (CTE)_\n",
                "\n",
                "10\\. Which employees do not have dependents?"
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "e9115823-0bcf-477e-ab58-56fdd1a04b0a"
            },
            "attachments": {}
        },
        {
            "cell_type": "code",
            "source": [
                "WITH dependentless AS ( --creating a CTE\n",
                "    SELECT employee_id\n",
                "    FROM employees\n",
                "    EXCEPT --Do not include rows that appear in this query below\n",
                "    SELECT employee_id\n",
                "    FROM dependents)\n",
                "SELECT D.employee_id, E.full_name\n",
                "FROM dependentless D\n",
                "JOIN employees E ON D.employee_id = E.employee_id --Join the CTE to employees to find the full names of the employees whose ID's are present in the CTE above"
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "d4deec4e-91ee-4ef8-8d56-8ba325339896"
            },
            "outputs": [
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "(10 rows affected)"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "display_data",
                    "data": {
                        "text/html": "Total execution time: 00:00:00.038"
                    },
                    "metadata": {}
                },
                {
                    "output_type": "execute_result",
                    "execution_count": 39,
                    "data": {
                        "application/vnd.dataresource+json": {
                            "schema": {
                                "fields": [
                                    {
                                        "name": "employee_id"
                                    },
                                    {
                                        "name": "full_name"
                                    }
                                ]
                            },
                            "data": [
                                {
                                    "0": "120",
                                    "1": "Matthew Weiss"
                                },
                                {
                                    "0": "121",
                                    "1": "Adam Fripp"
                                },
                                {
                                    "0": "122",
                                    "1": "Payam Kaufling"
                                },
                                {
                                    "0": "123",
                                    "1": "Shanta Vollman"
                                },
                                {
                                    "0": "126",
                                    "1": "Irene Mikkilineni"
                                },
                                {
                                    "0": "177",
                                    "1": "Jack Livingston"
                                },
                                {
                                    "0": "178",
                                    "1": "Kimberely Grant"
                                },
                                {
                                    "0": "179",
                                    "1": "Charles Johnson"
                                },
                                {
                                    "0": "192",
                                    "1": "Sarah Bell"
                                },
                                {
                                    "0": "193",
                                    "1": "Britney Everett"
                                }
                            ]
                        },
                        "text/html": "<table><tr><th>employee_id</th><th>full_name</th></tr><tr><td>120</td><td>Matthew Weiss</td></tr><tr><td>121</td><td>Adam Fripp</td></tr><tr><td>122</td><td>Payam Kaufling</td></tr><tr><td>123</td><td>Shanta Vollman</td></tr><tr><td>126</td><td>Irene Mikkilineni</td></tr><tr><td>177</td><td>Jack Livingston</td></tr><tr><td>178</td><td>Kimberely Grant</td></tr><tr><td>179</td><td>Charles Johnson</td></tr><tr><td>192</td><td>Sarah Bell</td></tr><tr><td>193</td><td>Britney Everett</td></tr></table>"
                    },
                    "metadata": {}
                }
            ],
            "execution_count": 39
        },
        {
            "cell_type": "markdown",
            "source": [
                "## Original SQLite Script"
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "17b76ba5-c99c-49c5-a287-94812e06cfa9"
            },
            "attachments": {}
        },
        {
            "cell_type": "markdown",
            "source": [
                "\\--FILTERING\n",
                "\n",
                "\\--1. Find employees whose salary is less than $6,000. Return their full name and salary\n",
                "\n",
                "SELECT first\\_name || \" \" || last\\_name AS full\\_name, salary\n",
                "\n",
                "FROM employees\n",
                "\n",
                "WHERE salary \\< 6000\n",
                "\n",
                "\\--2. Find employees who were hired after 1997-09-01. Return their full name and hire date.\n",
                "\n",
                "SELECT first\\_name || \" \" || last\\_name AS full\\_name, hire\\_date\n",
                "\n",
                "FROM employees\n",
                "\n",
                "WHERE hire\\_date \\> date('1997-09-01')\n",
                "\n",
                "\\--ALTERING TABLES\n",
                "\n",
                "\\--3. Create a new column in 'employees' for full name\n",
                "\n",
                "ALTER TABLE employees\n",
                "\n",
                "ADD full\\_name TEXT\n",
                "\n",
                "UPDATE employees\n",
                "\n",
                "SET full\\_name = employees.first\\_name || \" \" || employees.last\\_name\n",
                "\n",
                "\\--FILTERING AND JOINNING\n",
                "\n",
                "\\--4. What job titles are within the Finance department?\n",
                "\n",
                "\\--What is the deparmtent ID for the Finance department?\n",
                "\n",
                "SELECT \\*\n",
                "\n",
                "FROM departments\n",
                "\n",
                "WHERE department\\_name = \"Finance\"\n",
                "\n",
                "\\--The department\\_id for Finance is 10.\n",
                "\n",
                "\\--METHOD 1, simple queries\n",
                "\n",
                "\\--Find all job\\_id's for everyone in the Finance department\n",
                "\n",
                "SELECT DISTINCT(job\\_id)\n",
                "\n",
                "FROM employees\n",
                "\n",
                "WHERE department\\_id = 10\n",
                "\n",
                "\\--7 and 6 are the two job\\_id's within the Finance department\n",
                "\n",
                "\\--Find the job titles for job\\_id's 7 and 6\n",
                "\n",
                "SELECT job\\_title AS finance\\_jobs\n",
                "\n",
                "FROM jobs\n",
                "\n",
                "WHERE job\\_id = 7 OR job\\_id = 6\n",
                "\n",
                "\\-- Accountant and Finance Manager are the two titles held in the Finance department\n",
                "\n",
                "\\--METHOD 2, join\n",
                "\n",
                "SELECT DISTINCT(jobs.job\\_title) AS finance\\_jobs\n",
                "\n",
                "FROM employees\n",
                "\n",
                "JOIN jobs ON employees.job\\_id = jobs.job\\_id\n",
                "\n",
                "WHERE employees.department\\_id = 10\n",
                "\n",
                "\\--5. Which employees have first names OR last names that do not start with the letters 'D' or 'S'? When were they hired? What is their salary? What is their department?\n",
                "\n",
                "SELECT employees.full\\_name, employees.hire\\_date, employees.salary, departments.department\\_name\n",
                "\n",
                "FROM employees\n",
                "\n",
                "JOIN departments on employees.department\\_id = departments.department\\_id\n",
                "\n",
                "WHERE employees.first\\_name NOT LIKE 'D%' AND\n",
                "\n",
                "employees.first\\_name NOT LIKE 'S%' AND\n",
                "\n",
                "employees.last\\_name NOT LIKE 'D%' AND\n",
                "\n",
                "employees.last\\_name NOT LIKE 'S%'\n",
                "\n",
                "\\--GROUPING\n",
                "\n",
                "\\--6. Which location has the most employees?\n",
                "\n",
                "\\--Which is the biggest department?\n",
                "\n",
                "SELECT department\\_id, MAX(employee\\_count)\n",
                "\n",
                "FROM (SELECT department\\_id, COUNT(department\\_id) employee\\_count\n",
                "\n",
                "FROM employees\n",
                "\n",
                "GROUP BY department\\_id)\n",
                "\n",
                "\\--Department ID 5 has the most employees at 7 employees\n",
                "\n",
                "\\--Where is the biggest department?\n",
                "\n",
                "SELECT departments.department\\_name, locations.city, locations.country\\_id\n",
                "\n",
                "FROM departments\n",
                "\n",
                "JOIN locations ON departments.location\\_id = locations.location\\_id\n",
                "\n",
                "WHERE department\\_id = 5\n",
                "\n",
                "\\--Shipping in South San Francisco, US is the largest department\n",
                "\n",
                "\\--SUBQUERIES\n",
                "\n",
                "\\--7. Which department has the most managers?\n",
                "\n",
                "SELECT departments.department\\_name, MAX(department\\_count.manager\\_count) manager\\_count\n",
                "\n",
                "FROM (SELECT department\\_id, COUNT(DISTINCT(manager\\_id)) manager\\_count\n",
                "\n",
                "FROM employees\n",
                "\n",
                "GROUP BY department\\_id) department\\_count\n",
                "\n",
                "JOIN departments ON departments.department\\_id = department\\_count.department\\_id\n",
                "\n",
                "\\--The Shipping department has 3 managers\n",
                "\n",
                "\\--TEMPORARY TABLES\n",
                "\n",
                "\\--8. What are the new salaries of all employees, based on their titles?\n",
                "\n",
                "\\--assign percentage increase for raise\n",
                "\n",
                "DROP TABLE IF EXISTS raises\n",
                "\n",
                "CREATE TEMP TABLE raises AS\n",
                "\n",
                "SELECT job\\_id, job\\_title,\n",
                "\n",
                "(CASE\n",
                "\n",
                "WHEN \\[job\\_title\\] LIKE \"%President%\" OR\n",
                "\n",
                "\\[job\\_title\\] LIKE \"%Manager%\"\n",
                "\n",
                "THEN 0.05\n",
                "\n",
                "ELSE 0.03 END) AS percent\\_inc\n",
                "\n",
                "FROM jobs\n",
                "\n",
                "\\--calculate new salary after raise\n",
                "\n",
                "SELECT E.employee\\_id, E.full\\_name, E.job\\_id, E.salary AS old\\_salary, R.percent\\_inc, (E.salary + E.salary\\*R.percent\\_inc) AS new\\_salary\n",
                "\n",
                "FROM employees E\n",
                "\n",
                "JOIN raises R ON E.job\\_id = R.job\\_id\n",
                "\n",
                "\\--RECURSIVE QUERIES\n",
                "\n",
                "\\--9. Find the hierarchy of employees under a given manager \"Neena Kochhar\"\n",
                "\n",
                "WITH RECURSIVE emp\\_hierarchy AS\n",
                "\n",
                "(SELECT employee\\_id, full\\_name, manager\\_id, job\\_id, 1 as level\n",
                "\n",
                "FROM employees\n",
                "\n",
                "WHERE first\\_name = \"Neena\"\n",
                "\n",
                "UNION\n",
                "\n",
                "SELECT E.employee\\_id, E.full\\_name, E.manager\\_id, E.job\\_id, H.level + 1 AS level\n",
                "\n",
                "FROM emp\\_hierarchy H\n",
                "\n",
                "JOIN employees E ON H.employee\\_id = E.manager\\_id)\n",
                "\n",
                "SELECT H2.employee\\_id, H2.full\\_name AS employee\\_name, E2.full\\_name AS manager\\_name, H2.level AS level\n",
                "\n",
                "FROM emp\\_hierarchy H2\n",
                "\n",
                "JOIN employees E2 ON E2.employee\\_id = H2.manager\\_id\n",
                "\n",
                "\\--CTE\n",
                "\n",
                "\\--10. Which employees do not have dependents?\n",
                "\n",
                "WITH dependentless AS (\n",
                "\n",
                "SELECT employee\\_id\n",
                "\n",
                "FROM employees\n",
                "\n",
                "EXCEPT\n",
                "\n",
                "SELECT employee\\_id\n",
                "\n",
                "FROM dependents)\n",
                "\n",
                "SELECT D.employee\\_id, E.full\\_name\n",
                "\n",
                "FROM dependentless D\n",
                "\n",
                "JOIN employees E ON D.employee\\_id = E.employee\\_id"
            ],
            "metadata": {
                "language": "sql",
                "azdata_cell_guid": "4deea636-e98e-4f84-afc6-244fd8a87160"
            },
            "attachments": {}
        }
    ]
}