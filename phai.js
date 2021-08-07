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

    get: function (path, callback, errorHandler) {
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
        },
     
        getText: function (path, onSuccess, onError, beforeSend, afterExecuted) {
            beforeSend();
            fetch(path)
                .then((rsp) => { return rsp.text() })
                .then((r) => {
                    onSuccess(r);
                })
                .catch((e) => { if (onError) onError(e) })
                .finally(() => { if (afterExecuted) afterExecuted();})
    }
}
