
// Tổng đài hỗ trợ miễn phí

 const ListPaymentMethods = ()=>{
    const data = [
        {
            "id": 1,
            "name":'alepay',
            "image": "https://image.cellphones.com.vn/x35/media/logo/payment/alepay-logo.png",
           
        },
        {
            "id": 2,
            "name":'zalopay',
            "image": "https://image.cellphones.com.vn/x35/media/logo/payment/zalopay-logo.png",
           
        },
        {
            "id": 3,
            "name":'vnpay',
            "image": "https://image.cellphones.com.vn/x35/media/logo/payment/vnpay-logo.png",
           
        },
        {
            "id": 4,
            "name":'moca',
            "image": "https://image.cellphones.com.vn/x35/media/logo/payment/moca-logo.png",
           
        },
        {
            "id": 5,
            "name":'onepay',
            "image": "https://image.cellphones.com.vn/x35/media/logo/payment/onepay-logo.png",
           
        },
        {
            "id": 6,
            "name":'kredivo',
            "image": "https://image.cellphones.com.vn/x35/media/logo/payment/kredivo-logo.png",
           
        },
        {
            "id": 7,
            "name":'mpos',
            "image": "https://image.cellphones.com.vn/x35/media/logo/payment/mpos-logo.png",
           
        },
    
    ]
        return data
}
// Thông tin và chính sách
 const ListInformationPolicy = ()=>{
    const data = [
        {
            "id": 1,
            "content":'Mua hàng và thanh toán Online',    
        },
        {
            "id": 2,
            "content":'Mua hàng trả góp Online',    
        },
        {
            "id": 3,
            "content":'Tra thông tin đơn hàng',    
        },
        {
            "id": 4,
            "content":'Tra điểm Smember',    
        },
        {
            "id": 5,
            "content":'Xem ưu đãi Smember',    
        },
        {
            "id": 6,
            "content":'Tra thông tin bảo hành',    
        },
        {
            "id": 7,
            "content":'Tra cứu hoá đơn điện tử',    
        },
        {
            "id": 8,
            "content":'Thông tin hoá đơn mua hàng',    
        },
        {
            "id": 9,
            "content":'Trung tâm bảo hành chính hãng',    
        },
        {
            "id": 10,
            "content":'Quy định về việc sao lưu dữ liệu',    
        },
      
    
    ]
        return data
}

// // Dịch vụ và thông tin khác
 const ListInformationServices= ()=>{
    const data = [
        {
            "id": 1,
            "content":'Khách hàng doanh nghiệp (B2B)',    
        },
        {
            "id": 2,
            "content":'Ưu đãi thanh toán',    
        },
        {
            "id": 3,
            "content":'Quy chế hoạt động',    
        },
        {
            "id": 4,
            "content":'Chính sách Bảo hành',    
        },
        {
            "id": 5,
            "content":'Liên hệ hợp tác kinh doanh',    
        },
        {
            "id": 6,
            "content":'Tuyển dụng',    
        },
        {
            "id": 7,
            "content":'Dịch vụ bảo hành điện thoại',    
        },
        {
            "id": 8,
            "content":'Dịch vụ bảo hành mở rộng',    
        },
       
      
    
    ]
        return data
}

// Kết nối với CellphoneS

const ListConnect = ()=>{
    const data = [
        {
            "id": 1,
            "name":'youtube',
            "image": "https://image.cellphones.com.vn/44x/media/logo/social/cellphones-youtube.png",
           
        },
        {
            "id": 2,
            "name":'facebook',
            "image": "https://image.cellphones.com.vn/44x/media/logo/social/cellphones-facebook.png",
           
        },
        {
            "id": 3,
            "name":'instagram',
            "image": "https://image.cellphones.com.vn/44x/media/logo/social/cellphones-instagram.png",
           
        },
        {
            "id": 4,
            "name":'tiktok',
            "image": "https://image.cellphones.com.vn/44x/media/logo/social/cellphones-tiktok.png",
           
        },
        {
            "id": 5,
            "name":'zalo',
            "image": "https://image.cellphones.com.vn/44x/media/logo/social/cellphones-zalo.png",
           
        },
    
    ]
        return data
}
// Website thành viên

const ListWebsite= ()=>{
    const data = [
        {
            "id": 1,
            "content":'Hệ thống bảo hành sửa chữa Điện thoại - Máy tính',
            "image": "https://image.cellphones.com.vn/x30/media/logo/corp-members/dienthoaivui.png",
           
        },
        {
            "id": 2,
            "content":'Trung tâm bảo hành uỷ quyền Apple',
            "image": "https://image.cellphones.com.vn/x30/media/logo/corp-members/dienthoaivui-asp.png",
           
        },
        {
            "id": 3,
            "content":'Kênh thông tin giải trí công nghệ cho giới trẻ',
            "image": "https://image.cellphones.com.vn/x30/media/logo/corp-members/schanel.png",
           
        },
        {
            "id": 4,
            "content":'Trang thông tin công nghệ mới nhất',
            "image": "https://image.cellphones.com.vn/x30/media/logo/corp-members/sforum.png",
           
        },
       
    
    ]
        return data
}
export {ListPaymentMethods,ListInformationPolicy,ListInformationServices,ListConnect,ListWebsite}