<script>
    function checkAvailability (arr , Val) {
        return arr.some(function (arrVal) {
            return val === arrVal;
        });
    }
    function func() {
        // Original function
        var arr = [2, 5, 8, 1, 4];
 
        // Checking for condition
        console.log(checkAvailability(arr, 2));
        console.log(checkAvailability(arr, 87));
    }
    func();
</script