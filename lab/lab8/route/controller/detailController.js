window.detailBookController = function($scope,$http,$routeParams,$location){
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
}