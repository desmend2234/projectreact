import Loading from '../../components/Loading';
import { useState } from 'react';
function Home() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className='container'>
        <Loading isLoading={isLoading} />
        <div className='row flex-md-row-reverse flex-column'>
          <div className='col-md-6'>
            <img
              src='https://images.unsplash.com/photo-1526038335545-4b96864eaee7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80
    alt='
              className='img-fluid'
            />
          </div>
          <div className='col-md-6 d-flex flex-column justify-content-center mt-md-0 mt-3'>
            <h2 className='fw-bold'>Lorem ipsum dolor sit</h2>
            <h5 className='font-weight-normal text-muted mt-2'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </h5>
            <div className='input-group mb-0 mt-4'>
              <input
                type='text'
                className='form-control rounded-0'
                placeholder=''
              />
              <div className='input-group-append'>
                <button
                  className='btn btn-dark rounded-0'
                  type='button'
                  id='search'
                >
                  Lorem ipsum
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-6 mt-md-4'>
            <div className='card border-0 mb-4 position-relative position-relative'>
              <img
                src='https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80'
                className='card-img-top rounded-0'
                alt='...'
              />
              <div className='card-body p-0'>
                <h4 className='mb-0 mt-4'>Lorem ipsum</h4>
                <div className='d-flex justify-content-between mt-3'>
                  <p className='card-text text-muted mb-0 w-75'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod.
                  </p>
                  <button className='btn btn-outline-dark rounded-0 text-nowrap'>
                    Lorem ipsum
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 mt-md-4'>
            <div className='card border-0 mb-4 position-relative position-relative'>
              <img
                src='https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80'
                className='card-img-top rounded-0'
                alt='...'
              />
              <div className='card-body p-0'>
                <h4 className='mb-0 mt-4'>Lorem ipsum</h4>
                <div className='d-flex justify-content-between mt-3'>
                  <p className='card-text text-muted mb-0 w-75'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod.
                  </p>
                  <button className='btn btn-outline-dark rounded-0 text-nowrap'>
                    Lorem ipsum
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 mt-md-4'>
            <div className='card border-0 mb-4 position-relative position-relative'>
              <img
                src='https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80'
                className='card-img-top rounded-0'
                alt='...'
              />
              <div className='card-body p-0'>
                <h4 className='mb-0 mt-4'>Lorem ipsum</h4>
                <div className='d-flex justify-content-between mt-3'>
                  <p className='card-text text-muted mb-0 w-75'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod.
                  </p>
                  <button className='btn btn-outline-dark rounded-0 text-nowrap'>
                    Lorem ipsum
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 mt-md-4'>
            <div className='card border-0 mb-4 position-relative position-relative'>
              <img
                src='https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80'
                className='card-img-top rounded-0'
                alt='...'
              />
              <div className='card-body p-0'>
                <h4 className='mb-0 mt-4'>Lorem ipsum</h4>
                <div className='d-flex justify-content-between mt-3'>
                  <p className='card-text text-muted mb-0 w-75'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod.
                  </p>
                  <button className='btn btn-outline-dark rounded-0 text-nowrap'>
                    Lorem ipsum
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-light mt-7'>
        <div className='container'>
          <div
            id='carouselExampleControls'
            className='carousel slide'
            data-ride='carousel'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <div className='row justify-content-center py-7'>
                  <div className='col-md-8 d-flex'>
                    <img
                      src='https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                      alt=''
                      className='rounded-circle me-5'
                      style={{
                        width: '160px',
                        height: '160px',
                        objectFit: ' cover',
                      }}
                    />
                    <div className='d-flex flex-column'>
                      <p className='h5'>
                        “Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat.”
                      </p>
                      <p className='mt-auto text-muted'>
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='row justify-content-center py-7'>
                  <div className='col-md-8 d-flex'>
                    <img
                      src='https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                      alt=''
                      className='rounded-circle me-5'
                      style={{
                        width: '160px',
                        height: '160px',
                        objectFit: 'cover',
                      }}
                    />
                    <div className='d-flex flex-column'>
                      <p className='h5'>
                        “Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat.”
                      </p>
                      <p className='mt-auto text-muted'>
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='row justify-content-center py-7'>
                  <div className='col-md-8 d-flex'>
                    <img
                      src='https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                      alt=''
                      className='rounded-circle me-5'
                      style={{
                        width: '160px',
                        height: '160px',
                        objectFit: 'cover',
                      }}
                    />
                    <div className='d-flex flex-column'>
                      <p className='h5'>
                        “Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat.”
                      </p>
                      <p className='mt-auto text-muted'>
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className='carousel-control-prev'
              href='#carouselExampleControls'
              role='button'
              data-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='sr-only'>Previous</span>
            </a>
            <a
              className='carousel-control-next'
              href='#carouselExampleControls'
              role='button'
              data-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className='container my-7'>
        <div className='row'>
          <div className='col-md-4'>
            <img
              src='https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
              alt=''
              style={{ width: '48px', height: ' 48px', objectFit: ' cover' }}
            />
            <h4 className='mt-4'>Lorem ipsum</h4>
            <p className='text-muted'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </div>
          <div className='col-md-4'>
            <img
              src='https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
              alt=''
              style={{ width: '48px', height: ' 48px', objectFit: ' cover' }}
            />
            <h4 className='mt-4'>Lorem ipsum</h4>
            <p className='text-muted'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </div>
          <div className='col-md-4'>
            <img
              src='https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
              alt=''
              style={{ width: '48px', height: ' 48px', objectFit: ' cover' }}
            />
            <h4 className='mt-4'>Lorem ipsum</h4>
            <p className='text-muted'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </div>
        </div>
      </div>
      <div className='bg-light py-7'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-4 text-center'>
              <h3>Lorem ipsum</h3>
              <p className='text-muted'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod.
              </p>
              <button className='btn btn-dark mt-4 rounded-0'>
                Lorem ipsum
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id='carouselExampleDark' class='carousel carousel-dark slide'>
        <div class='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide-to='0'
            class='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div class='carousel-inner'>
          <div class='carousel-item active' data-bs-interval='10000'>
            <img
              src='https://images.unsplash.com/photo-1553603227-2358aabe821e?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              class='d-block w-100'
              alt='...'
            />
            <div class='carousel-caption d-none d-md-block'>
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class='carousel-item' data-bs-interval='2000'>
            <img
              src='https://images.unsplash.com/photo-1553603227-2358aabe821e?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              class='d-block w-100'
              alt='...'
            />
            <div class='carousel-caption d-none d-md-block'>
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class='carousel-item'>
            <img
              src='https://images.unsplash.com/photo-1553603227-2358aabe821e?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              class='d-block w-100'
              alt='...'
            />
            <div class='carousel-caption d-none d-md-block'>
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button
          class='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  );
}
export default Home;
