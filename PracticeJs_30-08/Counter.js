function counter (start) {
    let count = start;

    function add() {
        count++;
    }

    function sub() {
        count--;
    }

    function get() {
        return count;
    }

    return [add,sub,get];
}

const [add,sub,get] = counter(10);

add();
add();
sub();

console.log(get());