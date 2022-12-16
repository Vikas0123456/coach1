import React from 'react';
// import './footer.css'
import {
  MDBFooter,
  MDBContainer,
  // MDBCol,
  // MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <>
    <div className='main-container' style={{position: 'static', marginTop: '95px'}} >
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'style={{  position: 'relative' }}>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com' role='button'>
            <MDBIcon fab className='fa fa-facebook' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.twitter.com' role='button'>
            <MDBIcon fab className='fa fa-twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.google.com' role='button'>
            <MDBIcon fab className='fa fa-google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/accounts/login/' role='button'>
            <MDBIcon fab className='fa fa-instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com' role='button'>
            <MDBIcon fab className='fa fa-linkedin' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.github.com' role='button'>
            <MDBIcon fab className='fa fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', height: '70px', textAlign: 'center' }}>
        © 2022 Copyright :
        <a className='text-white' href='https://healthplus.com/'>
         Healthplus.com
        </a>
      </div>
    </MDBFooter>
    </div>
    </>
  );
}


///////////////////////////////////
///////////////////////////////////

// import React from 'react';
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// export default function Footer() {
//   return (
//     <div className='main-container' style={{position: 'static', marginTop: '95px'}} >

//     <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
//       <MDBContainer className='pt-4'>
//         <section className='mb-4'>
//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fab fa-facebook-f' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-twitter' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-google' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa fa-instagram' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa fa-linkedin' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa fa-github' />
//           </MDBBtn>
//         </section>
//       </MDBContainer>

//       <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         © 2020 Copyright:
//         <a className='text-dark' href='https://mdbootstrap.com/'>
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//     </div>
//   );
// }
