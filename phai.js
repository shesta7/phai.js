var phai = {
    loader: null,
    post: function (path, data, callback, errorHandler) {
        var ph = this;
        if (ph.loader)
            ph.loader.start();

        fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
            .then(function (response) { return response.json() })
            .then(function (result) {
                if (result.isSuccess === false) {
                    if (errorHandler)
                        errorHandler(result);
                }
                else {
                    callback(result);
                }
            })
            .catch(function (error) { console.log("Error: " + error); })
            .finally(function () {
                if (ph.loader)
                    ph.loader.stop();
            });
    },

    get: function (path, callback) {
        var ph = this;
        if (ph.loader)
            ph.loader.start();

        fetch(path)
            .then(function (response) { return response.json() })
            .then(function (result) {
                if (result.isSuccess === false) {
                    if (errorHandler)
                        errorHandler(result);
                }
                else {
                    callback(result);
                }
            })
            .catch(function (error) { console.log("Error: " + error); })
            .finally(function () {
                if (ph.loader)
                    ph.loader.stop();
            });
        }
}
