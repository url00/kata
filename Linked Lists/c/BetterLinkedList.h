#ifndef BETTERLINKEDLIST_H_
#define BETTERLINKEDLIST_H_

typedef struct BetterNode {
    struct BetterNode* next;
    void* data;
} BetterNode;

typedef struct BetterLinkedList {
    BetterNode* head;
    int length;
    int (*init)(struct BetterLinkedList**);
    int (*addToStart)(struct BetterLinkedList*, void*);
    void (*print)(struct BetterLinkedList*);
} BetterLinkedList;

int BetterLinkedList_init(BetterLinkedList** ll);
static int BetterLinkedList_addToStart(BetterLinkedList* ll, void* data);
static void BetterLinkedList_print(BetterLinkedList* ll);

/*
int LinkedList_init(Node** linkedList);
int LinkedList_addToStart(Node** linkedList, void* data);
int LinkedList_insertBefore(Node** linkedList, void* data, int index);
int LinkedList_deleteAt(Node** linkedList, void** resultData, int index);
void LinkedList_free(Node** linkedList);
*/

#endif /* BETTERLINKEDLIST_H_ */
