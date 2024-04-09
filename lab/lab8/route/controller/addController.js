window.addBookController = function($scope,$http,$location){
    $scope.addBook = function(){
        let apiBook = "http://localhost:3000/listBook"

        let check = true;
        $scope.checkForm = {
            check_id: false,
            check_maSach: false,
            check_tenSach: false,
            check_loaiSach: false,
            check_giaSach: false,
            check_soLuong: false,
        }

        if(!$scope.book || !$scope.book.id){
            check = false;
            $scope.checkForm.check_id = true;
        }

        if(!$scope.book || !$scope.book.maSach){
            check = false;
            $scope.checkForm.check_maSach = true;
        }

        if(!$scope.book || !$scope.book.tenSach){
            check = false;
            $scope.checkForm.check_tenSach = true;
        }else if($scope.book.tenSach.length < 10){
            check = false;
            $scope.checkForm.check_tenSach = true;
        }

        if(!$scope.book || !$scope.book.loaiSach){
            check = false;
            $scope.checkForm.check_loaiSach = true;
        }

        if(!$scope.book || !$scope.book.giaSach){
            check = false;
            $scope.checkForm.check_giaSach = true;
        }else if($scope.book.giaSach < 10000){
            check = false;
            $scope.checkForm.check_giaSach = true;
        }else if (isNaN($scope.book.giaSach)){
            check = false;
            $scope.checkForm.check_giaSach = true;
        }

        if(!$scope.book || !$scope.book.soLuong){
            check = false;
            $scope.checkForm.check_soLuong = true;
        }

        if(check){
            let newBook = {
                id: $scope.book.id,
                maSach: $scope.book.maSach,
                tenSach: $scope.book.tenSach,
                loaiSach: $scope.book.loaiSach,
                giaSach: $scope.book.giaSach,
                soLuong: $scope.book.soLuong
            }
            $http.post(apiBook,newBook)
            .then(function(response){
                if(response.status == 200){
                    $location.path('/trang-chu')
                }
            })
        }else{
            alert("Lỗi khi thêm dữ liệu")
        }
        
    }
}