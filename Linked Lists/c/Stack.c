#include "Stack.h"

int Stack_push(Node** linkedList, void* data) {
    return LinkedList_insertBefore(linkedList, data, 0);
}

int Stack_pop(Node** linkedList, void* resultData) {
    return LinkedList_deleteAt(linkedList, resultData, 0);
}
