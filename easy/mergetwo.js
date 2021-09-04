//Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.


//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


const mergeTwoLists = (l1, l2) => {
    const result = new ListNode(0);
    let copy = result;

    while (l1 && l2) {
        if (l1.val >= l2.val) {
            copy.next = new ListNode(l2.val);
            l2 = l2.next;
        } else if (l2.val >= l1.val) {
            copy.next = new ListNode(l1.val);
            l1 = l1.next;
        }

        copy = copy.next
    }

    //There will be remaining node on either list
    if (l1) copy.next = l1;
    if (l2) copy.next = l2;

    return result.next;
}