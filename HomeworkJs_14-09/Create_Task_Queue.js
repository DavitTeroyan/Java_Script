function createTaskQueue() {
    const queue = [];

    return {
        add(taskFn) {
            queue.push(taskFn);
        },

        runNext() {
            if (queue.length === 0) {
                console.log("No tasks");
                return;
            }

            const task = queue.shift();
            task();
        }
    };
}

const tasks = createTaskQueue();

tasks.add(() => console.log("Task 1"));
tasks.add(() => console.log("Task 2"));

tasks.runNext();
tasks.runNext();
tasks.runNext();