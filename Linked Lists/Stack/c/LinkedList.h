#ifndef LINKEDLIST_H_
#define LINKEDLIST_H_

typedef struct Node {
    // Needs to be struct Node* because the typedef hasn't happened yet.
    struct Node* next;
    void* data;
} Node;

int LinkedList_init(Node** linkedList);
int LinkedList_addToStart(Node** linkedList, void* data);
int LinkedList_insertBefore(Node** linkedList, void* data, int index);
void LinkedList_toString(Node* linkedList);
void LinkedList_free(Node** linkedList);

#endif /* LINKEDLIST_H_ */
