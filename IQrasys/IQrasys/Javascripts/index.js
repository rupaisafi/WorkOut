var app = angular.module('app', ['ngAnimate']);
app.controller('home', function ($scope, $http) {
    var type = ['Room', 'Area'];
    var useFunction = ["useFunction1", "useFunction2", "useFunction3"];
    $scope.location = new function () {
        var _location = this;
        this.path = []
        this.iowait = false
        this.list = new function () {
            return [{
                "id": 1,
                "volume": 12.5,
                "type": "type",
                "useFunction": "function",
                "description": "description",
                "active": false,
                "index": [0],
                "loadingChild": false,
                "childs": []
            }, {
                "id": 9,
                "volume": 12.5,
                "type": "type",
                "useFunction": "function",
                "description": "description",
                "active": false,
                "index": [1],
                "loadingChild": false,
                "childs": []
            }]
        }
        this.expand = function () {

        }
        this.expose = function (model) {
            !model.childs.length && _location.readIn(model)
            _location.toggle(model)
            _location.search(model, function (list, index) {
            })
        }
        this.create = function (model) {
            var item = {
                "id": 100,
                "volume": 12.5,
                "type": "type",
                "useFunction": "function",
                "description": "description",
                "active": false,
                "index": [0],
                "loadingChild": false,
                "childs": []
            }
            if (model.id) {
                _location.search(model, function (list, index) {
                    var indexes = list[index].index;
                    var childLen = list[index].childs.length;
                    var myarr = [];
                    for (var j = 0; j < indexes.length; j++) {
                        myarr.push(indexes[j])
                    }
                    myarr.push(childLen)
                    item.index = myarr
                    list[index].childs[childLen] = item
                    console.log(item);
                })
                !model.active && _location.exposeLocation(model)
            } else {
                var index = _location.list.length;
                var item2 = {
                    "id": 100,
                    "volume": 12.5,
                    "type": "type",
                    "useFunction": "function",
                    "description": "description",
                    "active": false,
                    "index": [index],
                    "loadingChild": false,
                    "childs": []
                }
                _location.list.push(item2);
            }


        }
        this.update = function () {
            _location.searchLocation(model, function (list, index) {
            })
        }
        this.remove = function () {
            _location.searchLocation(model, function (list, index) {
            })
        }
        this.readIn = function (model) {
            model.loadingChild = true
            $http.get("/api/locationarea/readin/" + model.id).success(function (res) {
                model.loadingChild = false
                _location.search(model, function (list, index) {
                    var indexes = list[index].index;
                    for (i = 0; i < res.length; i++) {
                        var myarr = [];
                        for (var j = 0; j < indexes.length; j++) {
                            myarr.push(indexes[j])
                        }
                        myarr.push(i);
                        res[i].index = myarr;
                    }
                    list[index].childs = res;
                })
            })
        }
        this.toggle = function (model) {
            var isEqual = angular.equals(model.index, _location.path)
            if (isEqual) {
                if (model.active) {
                    model.active = false
                } else {
                    model.active = true
                }
            } else {
                var modlist = _location.list
                var pathlist = _location.list
                var modlen = model.index.length
                var pathlen = _location.path.length
                console.log(modlen + '-' + pathlen)
                for (var i = 0; i < pathlen; i++) {
                    pathlist = pathlist[_location.path[i]]
                    pathlist.active = false
                    pathlist = pathlist.childs
                }

                for (var i = 0; i < modlen; i++) {
                    modlist = modlist[model.index[i]]
                    modlist.active = true
                    modlist = modlist.childs
                }
            }
            _location.path = model.index
        }
        this.search = function (model, callback) {
            var list = _location.list
            var len = model.index.length
            for (var i = 0; i < len; i++) {
                if (i == (len - 1)) {
                    if (typeof callback === 'function') {
                        callback(list, model.index[i])
                    }
                } else {
                    list = list[model.index[i]].childs
                }
            }
        }
    }
})
