window.listController = function($scope,$http){
    let apiBook = "http://localhost:3000/listBook"

    $http.get(apiBook).then(function(response){
        console.log(response);
        if(response.status == 200){
            $scope.listBook = response.data
        }
    })

    $scope.deleteBook = function(idBook){
        let confirm = window.confirm("Bạn có muốn xóa sách này không ?")
        if(confirm){
            $http.delete(`${apiBook}/${idBook}`)
            .then(function(response){
                if(response.data == 200 ){
                    alert("Xóa thành công")
                }
            })
        }
    }
}