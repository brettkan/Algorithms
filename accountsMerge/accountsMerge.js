/*

Given a list accounts, each element accounts[i] is a list of strings, where the first element
accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person if
there is some email that is common to both accounts. Note that even if two accounts have the same
name, they may belong to different people as people could have the same name. A person can have any
number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: the first element of each
account is the name, and the rest of the elements are emails in sorted order. The accounts themselves
can be returned in any order.

Example 1:
Input:
accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"],
            ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]
Output: [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
         ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]

Explanation:

The first and third John's are the same person as they have the common email "johnsmith@mail.com".
The second John and Mary are different people as none of their email addresses are used by other accounts.
We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'],
['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.

Note:

The length of accounts will be in the range [1, 1000].
The length of accounts[i] will be in the range [1, 10].
The length of accounts[i][j] will be in the range [1, 30].

*/


/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const accountNames = new Map()
    const dsu = new DSU()

    accounts.forEach(([accountName, ...accountEmails]) => {
        accountEmails.forEach((accountEmail, index, emailArray) => {
            accountNames.set(accountEmail, accountName)
            if (index === 0) {
                dsu.add(accountEmail)
            } else {
                dsu.union(accountEmail, emailArray[index - 1])
            }
        })
    })

    const extractedUnionSet = dsu.extract()
    for (const emailSet of extractedUnionSet) {
        emailSet.sort()
        emailSet.unshift(accountNames.get(emailSet[0]))
    }
    return extractedUnionSet
};

class DSU {
    constructor() {
        this.parents = new Map()
    }

    add(x) {
        this.parents.set(x, this.parents.get(x) || x)
    }

    findTopParent(x) {
        this.add(x)

        if (x !== this.parents.get(x)) {
            this.parents.set(x, this.findTopParent(this.parents.get(x)))
        }

        return this.parents.get(x)
    }

    union(x, y) {
        this.parents.set(this.findTopParent(x), this.findTopParent(y))
    }

    extract() {
        for (const [child] of this.parents.entries()) {
            this.findTopParent(child)
        }

        const extracted = {}

        for (const [child, parent] of this.parents.entries()) {
            extracted[parent] = extracted[parent] || []
            extracted[parent].push(child)
        }

        const resultArray = Object.values(extracted)
        for (const set of resultArray) {
            set.sort()
        }

        return resultArray
    }
}


/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(accountsMerge([["David","David0@m.co","David1@m.co"],["David","David3@m.co","David4@m.co"],["David","David4@m.co","David5@m.co"],["David","David2@m.co","David3@m.co"],["David","David1@m.co","David2@m.co"]]))
// console.log(accountsMerge([["Alex","Alex5@m.co","Alex4@m.co","Alex0@m.co"],["Ethan","Ethan3@m.co","Ethan3@m.co","Ethan0@m.co"],["Kevin","Kevin4@m.co","Kevin2@m.co","Kevin2@m.co"],["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe2@m.co"],["Gabe","Gabe3@m.co","Gabe4@m.co","Gabe2@m.co"]]))
// console.log(accountsMerge([["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"],["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]))
