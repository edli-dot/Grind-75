# Write your MySQL query statement below
SELECT P.firstName, P.lastName, A.city, A.state
FROM Person P LEFT JOIN Address A
on P.personId = A.personId


Person =
| personId | lastName | firstName |
| -------- | -------- | --------- |
| 1        | Wang     | Allen     |
| 2        | Alice    | Bob       |


Output
| firstName | lastName | city          | state    |
| --------- | -------- | ------------- | -------- |
| Allen     | Wang     | null          | null     |
| Bob       | Alice    | New York City | New York |


Expected
| firstName | lastName | city          | state    |
| --------- | -------- | ------------- | -------- |
| Allen     | Wang     | null          | null     |
| Bob       | Alice    | New York City | New York |