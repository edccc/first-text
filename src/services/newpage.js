import request from '@/utils/request';
export default function testnew() {
    return request('http://www.qhdlink-student.top/student/newsa.php', {
        method: 'post',
        headers:{
          "Content-Type":"application/x-www-form-urlencoded"
        },
        body:"username=ljj&userpwd=12345678&userclass=53&type=2"
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
}

