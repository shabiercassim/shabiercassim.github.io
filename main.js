        // Function to get query parameters from the URL
        function getQueryParam(parameterName) {
            var urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(parameterName);
        }

        // Example: Get the value of the 'key' parameter
        var keyValue = getQueryParam('key');

        // Example: Get the value of the 'value' parameter
        var valueValue = getQueryParam('value');

        // Example: Log the values to the console
        console.log('Value of "key" parameter:', keyValue);
        console.log('Value of "value" parameter:', valueValue);

        window.datalayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'customEvent',
            'keyValue': keyValue ,
            'valueValue': valueValue
        });
      