window.updateBookController = function($scope,$http,$routeParams,$location){
    let apiBook = "http://localhost:3000/listBook"

    let idBook = $routeParams.id
    $http.get(`${apiBook}/${idBook}`)
    .then(function(response){
        if(response.status == 200){
            $scope.book = {
                id: response.data.id,
                maSach: response.data.maSach,
                tenSach: response.data.tenSach,
                loaiSach: response.data.loaiSach,
                giaSach: response.data.giaSach,
                soLuong: response.data.soLuong,
            }
        }
    })
    $scope.updateBook = function(){
        let updateBook = {
            id: $scope.book.id,
            maSach: $scope.book.maSach,
            tenSach: $scope.book.tenSach,
            loaiSach: $scope.book.loaiSach,
            giaSach: $scope.book.giaSach,
            soLuong: $scope.book.soLuong,
        }
        $http.put(`${apiBook}/${idBook}`,updateBook)
        .then(function(response){
        if(response.status == 200){
            $location.path('/trang-chu')
        }
    })
    }
    
}