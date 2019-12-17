<template>
  <div
    class="kt-aside kt-aside--fixed kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop"
    id="kt_aside"
  >
    <!-- begin:: Aside -->
    <div class="kt-aside__brand kt-grid__item" id="kt_aside_brand">
      <div class="kt-aside__brand-logo">
        <a href="index.html">
          ADMINISTRATION
          <!-- <img alt="Logo" src="https://keenthemes.com/metronic/themes/metronic/theme/default/demo1/dist/assets/media/logos/logo-light.png" /> -->
        </a>
      </div>

      <div class="kt-aside__brand-tools">
        <button class="kt-aside__brand-aside-toggler" id="kt_aside_toggler">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
              class="kt-svg-icon"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <polygon points="0 0 24 0 24 24 0 24" />
                <path
                  d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z"
                  fill="#000000"
                  fill-rule="nonzero"
                  transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999) "
                />
                <path
                  d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z"
                  fill="#000000"
                  fill-rule="nonzero"
                  opacity="0.3"
                  transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999) "
                />
              </g>
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
              class="kt-svg-icon"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <polygon points="0 0 24 0 24 24 0 24" />
                <path
                  d="M12.2928955,6.70710318 C11.9023712,6.31657888 11.9023712,5.68341391 12.2928955,5.29288961 C12.6834198,4.90236532 13.3165848,4.90236532 13.7071091,5.29288961 L19.7071091,11.2928896 C20.085688,11.6714686 20.0989336,12.281055 19.7371564,12.675721 L14.2371564,18.675721 C13.863964,19.08284 13.2313966,19.1103429 12.8242777,18.7371505 C12.4171587,18.3639581 12.3896557,17.7313908 12.7628481,17.3242718 L17.6158645,12.0300721 L12.2928955,6.70710318 Z"
                  fill="#000000"
                  fill-rule="nonzero"
                />
                <path
                  d="M3.70710678,15.7071068 C3.31658249,16.0976311 2.68341751,16.0976311 2.29289322,15.7071068 C1.90236893,15.3165825 1.90236893,14.6834175 2.29289322,14.2928932 L8.29289322,8.29289322 C8.67147216,7.91431428 9.28105859,7.90106866 9.67572463,8.26284586 L15.6757246,13.7628459 C16.0828436,14.1360383 16.1103465,14.7686056 15.7371541,15.1757246 C15.3639617,15.5828436 14.7313944,15.6103465 14.3242754,15.2371541 L9.03007575,10.3841378 L3.70710678,15.7071068 Z"
                  fill="#000000"
                  fill-rule="nonzero"
                  opacity="0.3"
                  transform="translate(9.000003, 11.999999) rotate(-270.000000) translate(-9.000003, -11.999999) "
                />
              </g>
            </svg>
          </span>
        </button>
      </div>
    </div>
    <!-- end:: Aside -->
    <!-- begin:: Aside Menu -->
    <div
      class="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid"
      id="kt_aside_menu_wrapper"
    >
      <div
        id="kt_aside_menu"
        class="kt-aside-menu"
        data-ktmenu-vertical="1"
        data-ktmenu-scroll="1"
        data-ktmenu-dropdown-timeout="500"
      >
        <ul class="kt-menu__nav">
          <li class="kt-menu__item kt-menu__item--active" aria-haspopup="true">
            <router-link to="/" class="kt-menu__link">
              <span class="kt-menu__link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  class="kt-svg-icon"
                >
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <polygon points="0 0 24 0 24 24 0 24" />
                    <path
                      d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z"
                      fill="#000000"
                      fill-rule="nonzero"
                    />
                    <path
                      d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z"
                      fill="#000000"
                      opacity="0.3"
                    />
                  </g>
                </svg>
              </span>
              <span class="kt-menu__link-text">Dashboard</span>
            </router-link>
          </li>

          <li class="kt-menu__section">
            <h4 class="kt-menu__section-text">REPORT</h4>
            <i class="kt-menu__section-icon flaticon-more-v2"></i>
          </li>

          <!-- Start Report -->
          <li
            class="kt-menu__item kt-menu__item--submenu"
            aria-haspopup="true"
            data-ktmenu-submenu-toggle="hover"
          >
            <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
              <span class="kt-menu__link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  class="kt-svg-icon"
                >
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5" />
                    <path
                      d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                      fill="#000000"
                      opacity="0.3"
                    />
                  </g>
                </svg>
              </span>
              <span class="kt-menu__link-text">Report</span>
              <i class="kt-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="kt-menu__submenu">
              <span class="kt-menu__arrow"></span>
              <ul class="kt-menu__subnav">
                <li class="kt-menu__item kt-menu__item--parent" aria-haspopup="true">
                  <span class="kt-menu__link">
                    <span class="kt-menu__link-text">REPORT</span>
                  </span>
                </li>
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="custom/apps/inbox.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">P / L</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
                <li
                  class="kt-menu__item kt-menu__item--submenu"
                  aria-haspopup="true"
                  data-ktmenu-submenu-toggle="hover"
                >
                  <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Buku Kas</span>
                    <i class="kt-menu__ver-arrow la la-angle-right"></i>
                  </a>
                  <div class="kt-menu__submenu">
                    <span class="kt-menu__arrow"></span>
                    <ul class="kt-menu__subnav">
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="custom/apps/todo/tasks.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Besar</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="custom/apps/todo/docs.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Kecil</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="custom/apps/inbox.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Buku Bank</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="custom/apps/inbox.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Stok</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
                <li
                  class="kt-menu__item kt-menu__item--submenu"
                  aria-haspopup="true"
                  data-ktmenu-submenu-toggle="hover"
                >
                  <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Penjualan</span>
                    <i class="kt-menu__ver-arrow la la-angle-right"></i>
                  </a>
                  <div class="kt-menu__submenu">
                    <span class="kt-menu__arrow"></span>
                    <ul class="kt-menu__subnav">
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="custom/apps/todo/tasks.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Copra</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="custom/apps/todo/docs.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Goods</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class="kt-menu__item kt-menu__item--submenu"
                  aria-haspopup="true"
                  data-ktmenu-submenu-toggle="hover"
                >
                  <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Pembelian</span>
                    <i class="kt-menu__ver-arrow la la-angle-right"></i>
                  </a>
                  <div class="kt-menu__submenu">
                    <span class="kt-menu__arrow"></span>
                    <ul class="kt-menu__subnav">
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="custom/apps/todo/tasks.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Copra</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="custom/apps/todo/docs.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Goods</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class="kt-menu__item kt-menu__item--submenu"
                  aria-haspopup="true"
                  data-ktmenu-submenu-toggle="hover"
                >
                  <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Data Pabrik</span>
                    <i class="kt-menu__ver-arrow la la-angle-right"></i>
                  </a>
                  <div class="kt-menu__submenu">
                    <span class="kt-menu__arrow"></span>
                    <ul class="kt-menu__subnav">
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="custom/apps/todo/tasks.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Copra</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="custom/apps/todo/docs.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">D/O Minyak</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="custom/apps/inbox.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Expenses</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="custom/apps/inbox.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Assets</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <!-- End Report -->

          <!-- Start Cash and Bank -->
          <li
            class="kt-menu__item kt-menu__item--submenu"
            aria-haspopup="true"
            data-ktmenu-submenu-toggle="hover"
          >
            <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
              <span class="kt-menu__link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  class="kt-svg-icon"
                >
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5" />
                    <path
                      d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                      fill="#000000"
                      opacity="0.3"
                    />
                  </g>
                </svg>
              </span>
              <span class="kt-menu__link-text">Cash and Bank</span>
              <i class="kt-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="kt-menu__submenu">
              <span class="kt-menu__arrow"></span>
              <ul class="kt-menu__subnav">
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="custom/apps/inbox.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Transfer Founds</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="custom/apps/inbox.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Receive Money</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="custom/apps/inbox.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Pay Money</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <!-- End Cash and Bank -->

          <!-- Start Sales -->
          <li
            class="kt-menu__item kt-menu__item--submenu"
            aria-haspopup="true"
            data-ktmenu-submenu-toggle="hover"
          >
            <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
              <span class="kt-menu__link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  class="kt-svg-icon"
                >
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5" />
                    <path
                      d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                      fill="#000000"
                      opacity="0.3"
                    />
                  </g>
                </svg>
              </span>
              <span class="kt-menu__link-text">Sales</span>
              <i class="kt-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="kt-menu__submenu">
              <span class="kt-menu__arrow"></span>
              <ul class="kt-menu__subnav">
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="custom/apps/inbox.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Copra</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="custom/apps/inbox.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Goods</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <!-- End Sales -->

          <!-- Start Purchases -->
          <li
            class="kt-menu__item kt-menu__item--submenu"
            aria-haspopup="true"
            data-ktmenu-submenu-toggle="hover"
          >
            <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
              <span class="kt-menu__link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  class="kt-svg-icon"
                >
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5" />
                    <path
                      d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                      fill="#000000"
                      opacity="0.3"
                    />
                  </g>
                </svg>
              </span>
              <span class="kt-menu__link-text">Purchases</span>
              <i class="kt-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="kt-menu__submenu">
              <span class="kt-menu__arrow"></span>
              <ul class="kt-menu__subnav">
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="custom/apps/inbox.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Copra</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="custom/apps/inbox.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Goods</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <!-- End Purchases -->

          <!-- Start Expenses -->
          <li class="kt-menu__item" aria-haspopup="true">
            <router-link class="kt-menu__link" to="/Expenses">
              <span class="kt-menu__link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  class="kt-svg-icon"
                >
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <path
                      d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
                      fill="#000000"
                    />
                    <rect
                      fill="#000000"
                      opacity="0.3"
                      transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) "
                      x="16.3255682"
                      y="2.94551858"
                      width="3"
                      height="18"
                      rx="1"
                    />
                  </g>
                </svg>
              </span>
              <span class="kt-menu__link-text">Expenses</span>
            </router-link>
          </li>
          <!-- end expenses -->

          <!-- Start Cashier Transaction -->
          <li class="kt-menu__item" aria-haspopup="true">
            <router-link class="kt-menu__link" to="/CashierTransaction">
              <span class="kt-menu__link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  class="kt-svg-icon"
                >
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <path
                      d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
                      fill="#000000"
                    />
                    <rect
                      fill="#000000"
                      opacity="0.3"
                      transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) "
                      x="16.3255682"
                      y="2.94551858"
                      width="3"
                      height="18"
                      rx="1"
                    />
                  </g>
                </svg>
              </span>
              <span class="kt-menu__link-text">Cashier Transaction</span>
            </router-link>
          </li>
          <!-- end Cashier Transaction -->

          <li class="kt-menu__item" aria-haspopup="true">
            <router-link class="kt-menu__link" to="/form1">
              <span class="kt-menu__link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  class="kt-svg-icon"
                >
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <path
                      d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
                      fill="#000000"
                    />
                    <rect
                      fill="#000000"
                      opacity="0.3"
                      transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) "
                      x="16.3255682"
                      y="2.94551858"
                      width="3"
                      height="18"
                      rx="1"
                    />
                  </g>
                </svg>
              </span>
              <span class="kt-menu__link-text">Contacs</span>
            </router-link>
          </li>

          <!-- Start Stock -->
          <li
            class="kt-menu__item kt-menu__item--submenu"
            aria-haspopup="true"
            data-ktmenu-submenu-toggle="hover"
          >
            <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
              <span class="kt-menu__link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  class="kt-svg-icon"
                >
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5" />
                    <path
                      d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                      fill="#000000"
                      opacity="0.3"
                    />
                  </g>
                </svg>
              </span>
              <span class="kt-menu__link-text">Stock</span>
              <i class="kt-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="kt-menu__submenu">
              <span class="kt-menu__arrow"></span>
              <ul class="kt-menu__subnav">
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="custom/apps/inbox.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Copra</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="custom/apps/inbox.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Goods</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <!-- End Stock -->

          <!-- Start Notification -->
          <li
            class="kt-menu__item kt-menu__item--submenu"
            aria-haspopup="true"
            data-ktmenu-submenu-toggle="hover"
          >
            <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
              <span class="kt-menu__link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  class="kt-svg-icon"
                >
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5" />
                    <path
                      d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                      fill="#000000"
                      opacity="0.3"
                    />
                  </g>
                </svg>
              </span>
              <span class="kt-menu__link-text">Notification</span>
              <i class="kt-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="kt-menu__submenu">
              <span class="kt-menu__arrow"></span>
              <ul class="kt-menu__subnav">
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="custom/apps/inbox.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Approved</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="custom/apps/inbox.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Alert</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="custom/apps/inbox.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Crosh Check</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <!-- End Notification -->

          <!-- Start Assets -->
          <li class="kt-menu__item" aria-haspopup="true">
            <router-link class="kt-menu__link" to="/form1">
              <span class="kt-menu__link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  class="kt-svg-icon"
                >
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <path
                      d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
                      fill="#000000"
                    />
                    <rect
                      fill="#000000"
                      opacity="0.3"
                      transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) "
                      x="16.3255682"
                      y="2.94551858"
                      width="3"
                      height="18"
                      rx="1"
                    />
                  </g>
                </svg>
              </span>
              <span class="kt-menu__link-text">Assets</span>
            </router-link>
          </li>
          <!-- Start Assets -->

          <!-- Start Setting -->
          <li
            class="kt-menu__item kt-menu__item--submenu"
            aria-haspopup="true"
            data-ktmenu-submenu-toggle="hover"
          >
            <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
              <span class="kt-menu__link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  class="kt-svg-icon"
                >
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5" />
                    <path
                      d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                      fill="#000000"
                      opacity="0.3"
                    />
                  </g>
                </svg>
              </span>
              <span class="kt-menu__link-text">Setting</span>
              <i class="kt-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="kt-menu__submenu">
              <span class="kt-menu__arrow"></span>
              <ul class="kt-menu__subnav">
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="custom/apps/inbox.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Data User</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="custom/apps/inbox.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Transaksi Log</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="custom/apps/inbox.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Price Setting</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <!-- End Setting -->

          <li class="kt-menu__section">
            <h4 class="kt-menu__section-text">CRUD</h4>
            <i class="kt-menu__section-icon flaticon-more-v2"></i>
          </li>
          <li
            class="kt-menu__item kt-menu__item--submenu"
            aria-haspopup="true"
            data-ktmenu-submenu-toggle="hover"
          >
            <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
              <span class="kt-menu__link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  class="kt-svg-icon"
                >
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <path
                      d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z"
                      fill="#000000"
                      opacity="0.3"
                    />
                    <path
                      d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z"
                      fill="#000000"
                    />
                  </g>
                </svg>
              </span>
              <span class="kt-menu__link-text">Forms</span>
              <i class="kt-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="kt-menu__submenu">
              <span class="kt-menu__arrow"></span>
              <ul class="kt-menu__subnav">
                <li class="kt-menu__item kt-menu__item--parent" aria-haspopup="true">
                  <span class="kt-menu__link">
                    <span class="kt-menu__link-text">Forms</span>
                  </span>
                </li>
                <li
                  class="kt-menu__item kt-menu__item--submenu"
                  aria-haspopup="true"
                  data-ktmenu-submenu-toggle="hover"
                >
                  <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Form Controls</span>
                    <i class="kt-menu__ver-arrow la la-angle-right"></i>
                  </a>
                  <div class="kt-menu__submenu">
                    <span class="kt-menu__arrow"></span>
                    <ul class="kt-menu__subnav">
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/forms/controls/base.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Base Inputs</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/forms/controls/input-group.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Input Groups</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/forms/controls/checkbox.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Checkbox</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/forms/controls/radio.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Radio</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/forms/controls/switch.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Switch</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/forms/controls/option.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Mega Options</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class="kt-menu__item kt-menu__item--submenu"
                  aria-haspopup="true"
                  data-ktmenu-submenu-toggle="hover"
                >
                  <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Form Widgets</span>
                    <i class="kt-menu__ver-arrow la la-angle-right"></i>
                  </a>
                  <div class="kt-menu__submenu">
                    <span class="kt-menu__arrow"></span>
                    <ul class="kt-menu__subnav">
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/forms/widgets/bootstrap-datepicker.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Datepicker</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/forms/widgets/bootstrap-datetimepicker.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Datetimepicker</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class="kt-menu__item kt-menu__item--submenu"
                  aria-haspopup="true"
                  data-ktmenu-submenu-toggle="hover"
                >
                  <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Form Text Editors</span>
                    <i class="kt-menu__ver-arrow la la-angle-right"></i>
                  </a>
                  <div class="kt-menu__submenu">
                    <span class="kt-menu__arrow"></span>
                    <ul class="kt-menu__subnav">
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/forms/editors/tinymce.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">TinyMCE</span>
                        </a>
                      </li>
                      <li
                        class="kt-menu__item kt-menu__item--submenu"
                        aria-haspopup="true"
                        data-ktmenu-submenu-toggle="hover"
                      >
                        <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">CKEditor</span>
                          <i class="kt-menu__ver-arrow la la-angle-right"></i>
                        </a>
                        <div class="kt-menu__submenu">
                          <span class="kt-menu__arrow"></span>
                          <ul class="kt-menu__subnav">
                            <li class="kt-menu__item" aria-haspopup="true">
                              <a
                                href="crud/forms/editors/ckeditor-classic.html"
                                class="kt-menu__link"
                              >
                                <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                                  <span></span>
                                </i>
                                <span class="kt-menu__link-text">CKEditor Classic</span>
                              </a>
                            </li>
                            <li class="kt-menu__item" aria-haspopup="true">
                              <a
                                href="crud/forms/editors/ckeditor-inline.html"
                                class="kt-menu__link"
                              >
                                <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                                  <span></span>
                                </i>
                                <span class="kt-menu__link-text">CKEditor Inline</span>
                              </a>
                            </li>
                            <li class="kt-menu__item" aria-haspopup="true">
                              <a
                                href="crud/forms/editors/ckeditor-balloon.html"
                                class="kt-menu__link"
                              >
                                <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                                  <span></span>
                                </i>
                                <span class="kt-menu__link-text">CKEditor Balloon</span>
                              </a>
                            </li>
                            <li class="kt-menu__item" aria-haspopup="true">
                              <a
                                href="crud/forms/editors/ckeditor-balloon-block.html"
                                class="kt-menu__link"
                              >
                                <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                                  <span></span>
                                </i>
                                <span class="kt-menu__link-text">CKEditor Balloon Block</span>
                              </a>
                            </li>
                            <li class="kt-menu__item" aria-haspopup="true">
                              <a
                                href="crud/forms/editors/ckeditor-document.html"
                                class="kt-menu__link"
                              >
                                <i class="kt-menu__link-bullet kt-menu__link-bullet--line">
                                  <span></span>
                                </i>
                                <span class="kt-menu__link-text">CKEditor Document</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/forms/editors/quill.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Quill Text Editor</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/forms/editors/summernote.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Summernote WYSIWYG</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/forms/editors/bootstrap-markdown.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Markdown Editor</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class="kt-menu__item kt-menu__item--submenu"
                  aria-haspopup="true"
                  data-ktmenu-submenu-toggle="hover"
                >
                  <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Form Layouts</span>
                    <i class="kt-menu__ver-arrow la la-angle-right"></i>
                  </a>
                  <div class="kt-menu__submenu">
                    <span class="kt-menu__arrow"></span>
                    <ul class="kt-menu__subnav">
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/forms/layouts/default-forms.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Default Forms</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/forms/layouts/multi-column-forms.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Multi Column Forms</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/forms/layouts/action-bars.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Basic Action Bars</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/forms/layouts/sticky-action-bar.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Sticky Action Bar</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class="kt-menu__item kt-menu__item--submenu"
                  aria-haspopup="true"
                  data-ktmenu-submenu-toggle="hover"
                >
                  <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Form Validation</span>
                    <i class="kt-menu__ver-arrow la la-angle-right"></i>
                  </a>
                  <div class="kt-menu__submenu">
                    <span class="kt-menu__arrow"></span>
                    <ul class="kt-menu__subnav">
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/forms/validation/states.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Validation States</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/forms/validation/form-controls.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Form Controls</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/forms/validation/form-widgets.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Form Widgets</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li
            class="kt-menu__item kt-menu__item--submenu"
            aria-haspopup="true"
            data-ktmenu-submenu-toggle="hover"
          >
            <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
              <span class="kt-menu__link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  class="kt-svg-icon"
                >
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <path
                      d="M10,4 L21,4 C21.5522847,4 22,4.44771525 22,5 L22,7 C22,7.55228475 21.5522847,8 21,8 L10,8 C9.44771525,8 9,7.55228475 9,7 L9,5 C9,4.44771525 9.44771525,4 10,4 Z M10,10 L21,10 C21.5522847,10 22,10.4477153 22,11 L22,13 C22,13.5522847 21.5522847,14 21,14 L10,14 C9.44771525,14 9,13.5522847 9,13 L9,11 C9,10.4477153 9.44771525,10 10,10 Z M10,16 L21,16 C21.5522847,16 22,16.4477153 22,17 L22,19 C22,19.5522847 21.5522847,20 21,20 L10,20 C9.44771525,20 9,19.5522847 9,19 L9,17 C9,16.4477153 9.44771525,16 10,16 Z"
                      fill="#000000"
                    />
                    <rect fill="#000000" opacity="0.3" x="2" y="4" width="5" height="16" rx="1" />
                  </g>
                </svg>
              </span>
              <span class="kt-menu__link-text">KTDatatable</span>
              <i class="kt-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="kt-menu__submenu">
              <span class="kt-menu__arrow"></span>
              <ul class="kt-menu__subnav">
                <li class="kt-menu__item kt-menu__item--parent" aria-haspopup="true">
                  <span class="kt-menu__link">
                    <span class="kt-menu__link-text">KTDatatable</span>
                  </span>
                </li>
                <li
                  class="kt-menu__item kt-menu__item--submenu"
                  aria-haspopup="true"
                  data-ktmenu-submenu-toggle="hover"
                >
                  <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Base</span>
                    <i class="kt-menu__ver-arrow la la-angle-right"></i>
                  </a>
                  <div class="kt-menu__submenu">
                    <span class="kt-menu__arrow"></span>
                    <ul class="kt-menu__subnav">
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/metronic-datatable/base/data-local.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Local Data</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/metronic-datatable/base/data-json.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">JSON Data</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/metronic-datatable/base/data-ajax.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Ajax Data</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/metronic-datatable/base/html-table.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">HTML Table</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/metronic-datatable/base/local-sort.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Local Sort</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/metronic-datatable/base/translation.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Translation</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class="kt-menu__item kt-menu__item--submenu"
                  aria-haspopup="true"
                  data-ktmenu-submenu-toggle="hover"
                >
                  <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Advanced</span>
                    <i class="kt-menu__ver-arrow la la-angle-right"></i>
                  </a>
                  <div class="kt-menu__submenu">
                    <span class="kt-menu__arrow"></span>
                    <ul class="kt-menu__subnav">
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/metronic-datatable/advanced/record-selection.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Record Selection</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/metronic-datatable/advanced/row-details.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Row Details</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/metronic-datatable/advanced/modal.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Modal Examples</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/metronic-datatable/advanced/column-rendering.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Column Rendering</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/metronic-datatable/advanced/column-width.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Column Width</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/metronic-datatable/advanced/vertical.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Vertical Scrolling</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/metronic-datatable/advanced/horizontal.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Horizontal Scrolling</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class="kt-menu__item kt-menu__item--submenu"
                  aria-haspopup="true"
                  data-ktmenu-submenu-toggle="hover"
                >
                  <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Child Datatables</span>
                    <i class="kt-menu__ver-arrow la la-angle-right"></i>
                  </a>
                  <div class="kt-menu__submenu">
                    <span class="kt-menu__arrow"></span>
                    <ul class="kt-menu__subnav">
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/metronic-datatable/child/data-local.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Local Data</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/metronic-datatable/child/data-ajax.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Remote Data</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class="kt-menu__item kt-menu__item--submenu"
                  aria-haspopup="true"
                  data-ktmenu-submenu-toggle="hover"
                >
                  <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">API</span>
                    <i class="kt-menu__ver-arrow la la-angle-right"></i>
                  </a>
                  <div class="kt-menu__submenu">
                    <span class="kt-menu__arrow"></span>
                    <ul class="kt-menu__subnav">
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/metronic-datatable/api/methods.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">API Methods</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/metronic-datatable/api/events.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Events</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li
            class="kt-menu__item kt-menu__item--submenu"
            aria-haspopup="true"
            data-ktmenu-submenu-toggle="hover"
          >
            <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
              <span class="kt-menu__link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  class="kt-svg-icon"
                >
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <rect fill="#000000" opacity="0.3" x="4" y="5" width="16" height="6" rx="1.5" />
                    <rect fill="#000000" x="4" y="13" width="16" height="6" rx="1.5" />
                  </g>
                </svg>
              </span>
              <span class="kt-menu__link-text">Datatables.net</span>
              <i class="kt-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="kt-menu__submenu">
              <span class="kt-menu__arrow"></span>
              <ul class="kt-menu__subnav">
                <li class="kt-menu__item kt-menu__item--parent" aria-haspopup="true">
                  <span class="kt-menu__link">
                    <span class="kt-menu__link-text">Datatables.net</span>
                  </span>
                </li>
                <li
                  class="kt-menu__item kt-menu__item--submenu"
                  aria-haspopup="true"
                  data-ktmenu-submenu-toggle="hover"
                >
                  <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Basic</span>
                    <i class="kt-menu__ver-arrow la la-angle-right"></i>
                  </a>
                  <div class="kt-menu__submenu">
                    <span class="kt-menu__arrow"></span>
                    <ul class="kt-menu__subnav">
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/datatables/basic/basic.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Basic Tables</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/datatables/basic/scrollable.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Scrollable Tables</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/datatables/basic/headers.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Complex Headers</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/datatables/basic/paginations.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Pagination Options</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class="kt-menu__item kt-menu__item--submenu"
                  aria-haspopup="true"
                  data-ktmenu-submenu-toggle="hover"
                >
                  <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Advanced</span>
                    <i class="kt-menu__ver-arrow la la-angle-right"></i>
                  </a>
                  <div class="kt-menu__submenu">
                    <span class="kt-menu__arrow"></span>
                    <ul class="kt-menu__subnav">
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/datatables/advanced/column-rendering.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Column Rendering</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/datatables/advanced/multiple-controls.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Multiple Controls</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/datatables/advanced/column-visibility.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Column Visibility</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/datatables/advanced/row-callback.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Row Callback</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/datatables/advanced/row-grouping.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Row Grouping</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/datatables/advanced/footer-callback.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Footer Callback</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class="kt-menu__item kt-menu__item--submenu"
                  aria-haspopup="true"
                  data-ktmenu-submenu-toggle="hover"
                >
                  <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Data sources</span>
                    <i class="kt-menu__ver-arrow la la-angle-right"></i>
                  </a>
                  <div class="kt-menu__submenu">
                    <span class="kt-menu__arrow"></span>
                    <ul class="kt-menu__subnav">
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/datatables/data-sources/html.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">HTML</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/datatables/data-sources/javascript.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Javascript</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/datatables/data-sources/ajax-client-side.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Ajax Client-side</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/datatables/data-sources/ajax-server-side.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Ajax Server-side</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class="kt-menu__item kt-menu__item--submenu"
                  aria-haspopup="true"
                  data-ktmenu-submenu-toggle="hover"
                >
                  <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Search Options</span>
                    <i class="kt-menu__ver-arrow la la-angle-right"></i>
                  </a>
                  <div class="kt-menu__submenu">
                    <span class="kt-menu__arrow"></span>
                    <ul class="kt-menu__subnav">
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/datatables/search-options/column-search.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Column Search</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a
                          href="crud/datatables/search-options/advanced-search.html"
                          class="kt-menu__link"
                        >
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Advanced Search</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class="kt-menu__item kt-menu__item--submenu"
                  aria-haspopup="true"
                  data-ktmenu-submenu-toggle="hover"
                >
                  <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Extensions</span>
                    <i class="kt-menu__ver-arrow la la-angle-right"></i>
                  </a>
                  <div class="kt-menu__submenu">
                    <span class="kt-menu__arrow"></span>
                    <ul class="kt-menu__subnav">
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/datatables/extensions/buttons.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Buttons</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/datatables/extensions/colreorder.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">ColReorder</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/datatables/extensions/keytable.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">KeyTable</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/datatables/extensions/responsive.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Responsive</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/datatables/extensions/rowgroup.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">RowGroup</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/datatables/extensions/rowreorder.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">RowReorder</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/datatables/extensions/scroller.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Scroller</span>
                        </a>
                      </li>
                      <li class="kt-menu__item" aria-haspopup="true">
                        <a href="crud/datatables/extensions/select.html" class="kt-menu__link">
                          <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                            <span></span>
                          </i>
                          <span class="kt-menu__link-text">Select</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li
            class="kt-menu__item kt-menu__item--submenu"
            aria-haspopup="true"
            data-ktmenu-submenu-toggle="hover"
          >
            <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
              <span class="kt-menu__link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  class="kt-svg-icon"
                >
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <path
                      d="M2,13 C2,12.5 2.5,12 3,12 C3.5,12 4,12.5 4,13 C4,13.3333333 4,15 4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 C2,15 2,13.3333333 2,13 Z"
                      fill="#000000"
                      fill-rule="nonzero"
                      opacity="0.3"
                    />
                    <rect fill="#000000" opacity="0.3" x="11" y="2" width="2" height="14" rx="1" />
                    <path
                      d="M12.0362375,3.37797611 L7.70710678,7.70710678 C7.31658249,8.09763107 6.68341751,8.09763107 6.29289322,7.70710678 C5.90236893,7.31658249 5.90236893,6.68341751 6.29289322,6.29289322 L11.2928932,1.29289322 C11.6689749,0.916811528 12.2736364,0.900910387 12.6689647,1.25670585 L17.6689647,5.75670585 C18.0794748,6.12616487 18.1127532,6.75845471 17.7432941,7.16896473 C17.3738351,7.57947475 16.7415453,7.61275317 16.3310353,7.24329415 L12.0362375,3.37797611 Z"
                      fill="#000000"
                      fill-rule="nonzero"
                    />
                  </g>
                </svg>
              </span>
              <span class="kt-menu__link-text">File Upload</span>
              <i class="kt-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="kt-menu__submenu">
              <span class="kt-menu__arrow"></span>
              <ul class="kt-menu__subnav">
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="crud/file-upload/metronic-avatar.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Metronic Avatar</span>
                  </a>
                </li>
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="crud/file-upload/dropzonejs.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">DropzoneJS</span>
                    <span class="kt-menu__link-badge">
                      <span class="kt-badge kt-badge--danger kt-badge--inline">new</span>
                    </span>
                  </a>
                </li>
                <li class="kt-menu__item" aria-haspopup="true">
                  <a href="crud/file-upload/uppy.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="kt-menu__link-text">Uppy</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- end:: Aside Menu -->
  </div>
</template>