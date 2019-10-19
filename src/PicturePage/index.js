import React, { useEffect } from 'react';

// CSS
import './PicturePage.css';

const PicturePage = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className='picture-page'>
      <div className='google-album'>
        <div class="pa-carousel-widget" style={{ width: '100%', height: '600px', display: 'none', margin: '0 30px', opacity: '1' }}
          data-link="https://photos.app.goo.gl/P3WWa8364TfrKVc67"
          data-description="102 new photos added to shared album"
        >
          <object data="https://lh3.googleusercontent.com/1Qq7CLnPeD5MywxXh25q3bH23Zt_2vqpUld0Ze000qQV_yF2lzsRMWhOoTsxwOXOZgAkrB9QSyQrV3BxO-g2MKHMF8ay1JNBXlbShYBqlqkfgmMhaRU4YzbGZr8eq42dmH0Y1Vp0-w=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/7AUPFK8dQQBgZumTNastUheP29KVV5-wezwPhMbpELYY3qBh3Pvdkj7c28PSPUnYS5VPExsvOhryr4sVKdjT5DoTvQuk3FI5oXduP0imj1DMZs3fkJnA81uJyi13Z-qqIUYKaSe4Nw=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/9Ipr-8U9CurtmKGoj_hUlx3f2P7LjZs3VoeqVyaDMZOMJGxofkSIgRuobrr8-vUplDvIBCqB0ozRwAFZPBOk1OypsxFjCbvMbZ1klMXTI9iBImqiDHLUKCs0JF16MNc9PBULW0qigw=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/WJSDvNsoFherbMdZhKTFeKPZAUMd75au8I_iUEoh4FbExqL22QRlcGbccgOf1mu1JwGV7nB2h4JS7IvPRYF1XNYnM3uk1DZVLdUCWtjJ4kH9yNqy6P0SCXZHX4D9WyJxpctSNmxDGw=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/BFNexM0CG5B7riDxoe3EHBs3KWo4kDlQlNDHX4HkjBr--utze09VfD_AQKOUast0E0SG7bZ7S5j8xcg0uef15Iw_0KibHMtJn_TeskZQqETxTJ1JqrzwaSDipF0VZRLi9eY7NzqY9w=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/FAR-pxdjpwWnkgco9D4PsPBHDAAWqSeioUOkXliim8xrjQC4noQABq7NOtBEdj3nvftaN435CkMAKz7Fmi0-dc3wOitzzyYPiS4xDmvfALPIa474xjxdIMk8rTBzNGKOdwMzDU9iAA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/9J8cXOvrMsG5TWiv5OWrr15HOnWOGnogzb2Bx_7jbmcxn61mquIWPAypAV61rR1wI04AaJ8U2rbk28-cCE3LG4TdOtI2gTMGpKUIofNQiOmkZtArgmvjYgyWS18ut6-SsYN3HkmINg=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/HIX3kiKa55eQOSFMjVKpfYBGXQ1UvxcORH9ZF4r3wCVxct8dMohJ1oazyGFZdQacEs5poF0K9fLPGrDtnGtj4kKRgH9QqizSeJHLEDDxYoi_IFHEUAI5JALLPdrxXUEUquIpv-lNQg=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/tR-nyYoAuc5hKqwW0B1B1HKMfF8AyrEO-wE-0vR8QfkdN2qBO8a1wUjTfVkwnIgA5Ppp6FJRP8SEnQq4Bt1rwUnui90a-flk4frJhNDMNJI1gwEvv8t5rHow_ql9AHXOLaLMXmOH_Q=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/Oq6VEWQVGm1ghukZkz9_V9mgHMG_eNAlKJclV_WxY1kJ6gIIz2ik4X7L74C5SBGG8ux5RX0pGZ3omMGfbv1LWJQ7E2sbAw_ZzeEJ8KeX85Z0WRtnNAt0JkBorwFeLo9IGy_ctl5GHA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/epk_0SAwPV3odcdQpt-8q5C2WQRFHC_d7soPtD_-y2MmPVoZKBfM5dlhb64EYIWt3gtLK4pTPaD3r9YoF8Gdlh5v1p17Gc9lMZXAS0aItGw36XcAVuVLmv2TQJtkCFJenr7_ScgbCg=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/c-jxsmLrVddjgejpQT8mMoSXE8zRqWRCaObqwS0iydWDb0Q9aWSspWNNfhXx5k7wh7BP3w01yfB8xBzf3f0QRcEsDYVXJ6pue-8HQCrwFw5o_lfyx-SrWQpqEck_RLvrriuauCe0Mw=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/GMlQQhzYLJFFAcqkMqG5Zj4bYXUvzf5pJkCY3k6U5FYm9FO3ukrVp_M0RFZxSaUdlRgDuualfSOLwhGbLWBl9Sf-Y128LH75oywcpz0QPHj_lbWKtrtVxD-3Hs1s9_bXxg0CovcxZg=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/p2kb497Uk7T92x8uWlXRYEONtX3uYelX9C0HS4iyXxxYBkcSDMbGNoL_AroDRMTNGOcPhFcnsLfNrKznaLrZeIRqm-Jl07_XNNINFQhPNF0v0nWHJGvLhZPvkvFajB39WytPOQD1NQ=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/TCNbTdw46MKvpQIM2Mq2KEq3y-rE1ccp59jIC7InomiB2hj5Agd3RZPV_jrLGw-dx-JoxUVo9bw2dEXVFD_NFDjtcRJ1H6uvxIUS6m1eHa7KQFwBsmxsU4tR2sL6Jd-xRckIIbnoDw=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/dhdd5RITpP6IowevbvQqf2eksTaYerK1AA5zqq9wxY_1WfgXIGUFCFWN5MD392rbYkX-X7dxad2a22wFbEkb8RxOEPIBkR6A2Ts4shsRPg-TXl6Z7Kiq_UN_HntTOHT8YhZSSCX-5g=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/AkDeBQ48xmgsZeoRyjTsMJVvnuIJSwIQO1vOYelq-kmHXJUsryI3tKTVdfrzWNwQmhZeJYbJTKrJfX25r7XGxzJSK3K6EZ0JJDETv3IvPlaGbPUVwxFvWLHTIKNUCtXTtGsj074SaA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/FsKf5HptuoAP9KSAAdsfN22F-5TzMfzTgoavuhUN4u4zEIfK7Z1IDjZvWvGy2YK9542IkRBTe0w6G8PrkAyrqxE6641vrWIakNnfVvOij0V712C08E2KSqjLkjbG3HhSrXYAYx7fZQ=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/W9lzHTBsIuU5QzcFw3DxNIu-qsO1JkFln12AEB5eMnveOy2spST7glIU7wS-I_ligCf1_2Wc3wJ33Nh8n0RafF-FoW9xvPvrANeiYYTEO01jg3r7W-ryz0HgTbyP0cdUW6QzBcUQ2A=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/6pWtc1KH5KSYaQmEbVxJeHr-sGFEpH5KqpeHmjOVeHG9xNDPH4bgHKrdxRsnO7fFHYpfLmGl1JB7-K8gaamAPiBWQZodAlCvrguzKYlc_0LY6bFq28gh_2WpmBtl2W6ohJo3ccl_xA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/nIo8VeHIwy9fY9WZj91OaOd6daLbRlZ_5hDC0dI7oC5QXDgb5e5bsomdE_EfucY3LT_8dpRUFQkl5_2vCWTisL-3KGtuMBPhP-0WuQGbufOfKMEPV4SY7JpPXKdQTUCSKwHZpvG5wA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/2QaJkkt45QjeDZoUXHSE-lA_YhZin41m5A5ijXe-lv8VNf7BNqYUClVHKM9rrPETBR90SU3oNe-vGVVEOIgS9JVX6rXZ-MfXwmJedljRVfUfsv9oC2y-LZAqnBroCcNIjyTg7SEHaQ=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/5z7EJtYR1LwxLfHU8EHm5YGjQXsfRmYuzi8MyqwV-nQFPNEZQR2I7xNkvHnNdMPI5K9hqcXgz7X5TvN1lc4EOGD6W0dy0MhPjWWV9nl-1ra9GADCuCE_-57ALQeAQ_JfPboOG4j6tg=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/-WBVIMY82qwAIy7ZvvkAmeQMXbnI2FYzJfT0FNFRplN7ON-W1j2oJUJHUP7FAMYJdWt2xgA4AkL-oYMGm9duVJthMTWv4OQOGFXTKrSFMwJzs2FKbiXVfS2PQA7jQzTGsIMosPn3hQ=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/uj6CGDWCGVTg4HzL7fgeyuypo-WRA29RWGZrsDrrWdvHYHmnIRSpREhUKCEfXiXrNZ1aJ9tJi4ZgPBiwsR4UOq62-YvnFHoTdm9n4LIpxANVNj03BLhdD2BTk9iLPbb6r8Kw2RIt-w=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/89xozZpt17GGSigm0CCIpRLxa3m0NipTVu9ZtOh4wG7WEgzv0NSJyaN5l4QjlZUKKzEJEUXaXvMGm04MJhA-4sTLHFfP7jzl0BFVAiNjbofyr4ZL3xxIRQP8nBa6-1UzUicM6WYn2Q=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/314EE2eR8coilxGdvCyhDuf2vgLcG0fvWdzjzr1lMKt8pLMfQPSz2RvDDdG9DnyT9dguKcsNkBIB3OvFcpLb4h73bV9u1yr2WbMdNaiUebzLsTr-m8o5-wt1-2WRmVU0DNlOt_ZQBA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/JnK2s9PDjiUPI9JvN2XVN7Nb459P9v0g_DZ3akNnx0WA26TdlU4hEVZBQle4jN_yDRror6yCbXB-XtdJ4-gqxEHeAHhkyZFVUb1iPBCamp_ZNTF_6eBOktpuXsFS4VVBMVn42UBuNA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/PKszv7rL1RwZUifEIli-S0LfZrEINWDzjf_3ZiaRL64NT4Ov41eBu4gPNwMucuOtSrJNooZuq1yjHNrtNkGT7QQZ76U7LTSW7ORXzOFYNKubnIMdmnbVMrrMNkaeV649VwumT09W4g=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/dEkTFA6VIt5tDwkfTWav4h3X1lGecbirmkEFQDk0n1wcB-XvNvjVJGuMEF3rhVwoGp53Q1OmR_5onoqxyKPvAGuBLyUGlz49ggpYLs-ETeEIGVzF6FXn-Ak9GubRnT4CeuGvhpy5Aw=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/g_vN89siXF2IGvrBy_JgkS1XUJY7_UMS4tn0lQ5GfNLlEo1jstHV2uG8BTk5Co0C1lfZA2UYPGQfVEzms0K2YuseSRqEwVpul-YzMhWuU0lUYLOwPjjNoVmEvac8UC9vgIXsoghDxg=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/GTwWpu7FCdGRp9s50-c79SkvSzdooAjAH0fYXqoqIz0VvmlVgH-ndkCN0hUL7FJoEj88sw4l1v83ec9pYVlxQInSKVulWRtxtZCTDP4mnCUs4-kT7gk4LRetG1q0YoEPFmYbbC9DTg=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/0FjG983oh2Glg6y-INNwpx5zT2UDdg6Dzb3rOXCM3WHlaUfYp5q8uzq4y6VY3RilCMa-h5mbdsb0tFajm59Y5OHLt4MLzmaycu3b4scUNjZdPdTyGm8yqhoROss7EBoIGmU44XWQpQ=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/gHHM511ljU9kZ1kDdhGNpflqxpKOCXx6vGxfjAA45RSMvwSc0pzaWYxADYhIez45PQLmj6cJvAbBnAgL70CZeOMwaEMlOlk7ranja4jVITh0YU7G6WreiqhFl0LRP-ozfs7Qa56whQ=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/ntjISSc1a2EbaxL0A7uOOhSAHrcWs6hBcmEXwuTCBXgQbft9sdqWenRZlQWxZ9Ij8PeuO6To4hW0lcVQEAoqpaFCsScb5kaBd85b-s17i_IVvKgZvQdHevS7cUWJ7NkZ7sF7pa_B9Q=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/HPWCfLB4P7VBe7DcNr1GHfRmk7UY-vsxiJ9evDNYA2I0epQRzPe6cF4lPBeumVzPBOmtXWN94E_OKjqO9VF4zeXwkmbgI-gQNFlw3zgm4lrhPfs4OBEbOUHSyekVNqA0PB65TasrEA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/lNXtGlbWD1mS49IDmfdKZInOA5Ai9ngstqVJf1EAU0Pv6KPtDkn2T04nskyjiMNo0MJ71djBlYsA33erW1XaoCDHGQchWMHT3HbMnJ3mya6lSXq06Ncd4CNdHoIhYzpKOld7mxHxwA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/WrYXgkLjB5_2FYrqBw3fYVfuc7WrDz4O7kTPJZGcBZWOOMhXJ8bEkKrgELJDMb9tHtqa6LztnXILVvE8II5DWv4VJE4WoSEj6NWWdDEjQmJxn4zVx6zDtOHPbwrw9DwMnFsAMOfyAQ=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/jlHQWjJ5sI6apT3ZRdigZJQzGRL6h3-HdcxPSiXkCEulZEd1E1yDqftxGUS7UBgXh5ffeKB1xuV3l6R2mmQScviBmqnaAP06SFniK_pEXGQ6hbqubOFwVREUXSm3kXdO0o4o4AdIvQ=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/rqDNlOG_pveroRwnWi5NngVdpgrQh1Xb48gMt67n4ThQJ8QwG9cHoZDsgjYTJRG_w4881SWDezhFFhBSDDaXkCeK3DHiTPmqmmkDrc7j7cDrhgMRXN6GnQ-XCjmXdVInEw8UMOvjew=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/tX0lAMgFbDf-REe-eoXNENGMH9phskhUGMXekuAXD46Xapmtq8WbD2kS1sXvid4NvSdLDsN51bKM2h92Q98cShnOVi2JIROMRCLXnyvrE5t0phwizGkU4VTbKzMjru0owBM1JGr73w=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/Hdzt2DmOjsxlH9zwQmw0Sm5hNIWzbA0_Zha52C1VEdUl-_0iOb2OpLqMY7Ck1Mtdr5T8RMv8WctJk_2cOqI8yOggLyyOe-AiUgAsFFoMgOusYHFncKU_P1BzmMHDLGpHzjuoTWoj5Q=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/lBx94AffWb4BCyI1SoMdSKbZ8VTK2eOuHLfDttXTECZ4HemUILzvdxPFtm_n2tvCyZz0Kf-ziigw_8XjdnmIb43VYOx-RbGZ7lSJdskgRLJoEQi6pz5teaYPSFcf0Pu9_HJZ5fFGeA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/qsWCu8Fbo2OO15Rh2YWsywzPWPHW6ol_uC9PeLliap0woLpS9QvU3VO7J1t9ad-EmiB-0ZeBHN-Iu0eviq1YSsVbbpzdZ1t5ZbE_E_kayvPpnMs8M4TKGmUICaOIrpYqLa8vBFwmGg=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/nV_MB8v-2XgSZK4Icx9le96_k6ekh8dRFimeHC7A64YKJTm8Wg9Y9aKs3facNZ5BtkqyJDo7J7h8OrbfgxPKH_KIYgNrRGyxGi-Ido6T6fVBmAyykGy8T7raxyx9CLiVoOLFas3cHA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/yQ8wsY5fjqOUxC9dyVsbOxv2H3E3Lj3vzxSLU6sp36U5LNaS45ZSaQ1fijYBATPL5-cKShtnj51glpa3I7NK_6uEit7TN8fPXIiJTbaMaeKOpCc8FLwH1zf5gjCeN_OeKdlHT2A1Og=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/o0Hzz3JZ1aIemSyL7zTR2EaAogysgKI79S8NKEq-iRBip8tbmqNksAwb34V7cOOtEX3z_mteBdLlm1euvhZdbakTd8Vhw-_SHdZfvqZs_rcjw3nr_MsdyustMkuuuhvzXB3Cjr-trg=m18" type="video/mp4"></object>
          <object data="https://lh3.googleusercontent.com/QF4tZXdB67Vog471prDtZ-dNeIqujvVSoO8YuxdTdA32xN2okp_O71ju2BuPRqqwhrJhQiNf0oMQZdoyC2sXVLADyaqEapHAl_QHg2HgwKnYGBd8A5XuWQsEp8ezuMw7Xw4ZLnoGZg=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/A8grIUVEWBbViOy4XFNIwUJ9uEeQYPp-8ZU4pCq1CU3clHn_CT7jSaC_MMzd31bNDc9Q7NOEkcpBytQsvEoJ2TZ0shuk8BhOycIFrn174kA_sRi3hJxBZVzHkTURCQZwmRxTxwpIag=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/dqAbWXoP8sHaDyPKIAoQfM9Ak-DFl9iN2hyrFi5-p2qntZCsUvqOPUtNWpzVIEkMlrN_K0GHd5PVCEDxsONz03xdNUOSnHFXa9OqVHsuWLjIRe90XWIHGqTIJPhdSn7KzeDBo49Syg=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/kHz9J_wc7HpzaM3-4YCurU59iHWE4E-mpX1DTBxDgzNn-G3xIJ-zBUc8a82y5sA3lP1NwKBxG0_8e4Y6J-nnOANerZebbK1nh4a_PYt3FSX5JripmzNIFOvv4bMotGLbvSykZp90wg=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/pjsmRUgYM_FB76t7XDXSjjawjTcriFyGA_cxTfxchYuCMk2TCgFtP6R-rFJfRCuS4wTKz8HE1-8X0G3aA7YiSUJSZ87T033Xj0LOC2j_CCnOPDgTOB5deSvzd3okMaLuez6r0jV2Kg=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/ZlS_qfEdO9SZidCrAybHHC-4s2m8zX2av5PNBJGNE6iEjAKehUH1kVP5D43JuwGoCmjjFZxlf2hSarhUCq_VV2RNKglybWXJsgV4F_3H0icnNzMdnMRcpszDdYdZyLPkDIvJhEbeKQ=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/Mq09y6EncGtB6gJ0gJ7Bzx15ZcWs18bhY-7v0sVppilSJxbwpO2sBhQUrCg9EQnUEEiBYUkpbto4cgy_7wca3Me2vcgFVPJCmIEdNAlOwhAKW1fdYC2v6cFK3K4_24JY5vp_Bdc1Mg=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/hiDLIdpJQqKvS3IW3_PpDBdh4MwQtxkWWOvHrvKxTeB5-3ZStvi46YgBRlXd3YsGsead1gZ463mF0CKpl8igAnc9yjBrTC6FYMMwWMKG3DtYLq1vR6TLoMCcfWPCs6JiWblcng0Zng=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/n2iNoSYXhlEJ-4zvxTfOvxJQu_vESUb56LoPNV8Ba_ZQEin_RePEGwf0X3rF1dcENhymKybvb-0C7RqIJQtyOkaRJ25aPrrv0259ya2Cv2mYRl_-bHcxTlZ7qweF3VpipQUBZ7mA1w=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/O-NwFS6__PT0BGRfe_K92BpNp_LiL_FyykFcoZrrvCySr_TGgmLlLS_BueVxZcJfX3Gj2uChIMxE2hQ6uhxXCC8V29FJQks7xwNZY2dyHfSB9FadMMLfxvjQNEU00TXZKgKXyhEl4A=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/ZPXC0KzV7slkdjsdjFF_kO2fko2OIeW5kJI_pCZ9Eg0muROdcmi9X0lEVU6rBudFqh3UCKC-DKqJaZ8q01W0YkajwRwwQwgl1RShMzHfWp94Wf-nCZutd-7yjYts-GIOQ0D1rAdp_g=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/66X7FPzhZvM5O_yQ2r3HsPOIIG8ehRrUXKFfxuvGY-qmY8CItoR9RBzpXr-xj29U73EOISG27zyJb_812YPW11yfKerScCBE_vulN64feYMRQAsnWY0J0hGE06I0ZKntz3eyfcYYOg=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/xaNnNc4QtDlZlV-2VKnjx6sUe7uPu4r4d3xshlIdT2ciFYjsa6F6BywYTq5bKKwZ9AnR0d2S0IjCgaYlQIlSnYnpeqFhPZW9mV6uXeo7son3TZah-HT59_Y4Q3ZSHLoq2saXcU_pQA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/-GpmAHLowOaZyU8aVTxeBcf060wYqx6oiM6hAT_KKvcpbySF6NssxkdMLaLjgH6PskRjw6LkZYwnAy67t41sDmQRoIZWUN6OgHE39AFzy7dVDQkkFLOpa0Bf_Btbz6U2LM1dFrBlfQ=m18" type="video/mp4"></object>
          <object data="https://lh3.googleusercontent.com/oRhIn-mOn4jq77xRlWrOWImWwajs_uq4yrkzqCB5nN0Q7kdfQRQBwffeLJA3eNEtyOQDA3SCFhZNTwW_b5Zf46SqGW2S2lWYJM8AolO1CaqUfXBW6pB_ns116qoqzmkZvFp-kQ2bCA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/3uOMAx_-rgJVg4camod-6Dlzz8eZITzspNHZiTYBfdpxtu5tnlQQMaLc_oM9b1Zs9N2bp1HKKTbTQRID_DSCcSKHQmBt2jFBNyjrP_MFB8MY-A-EjHgwG_GXEtay9pXpBWTf2UrbMQ=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/iKZNPGLJ54YRKiMtb9xwV_z3d3YL_qEEmXza2UWQNFmxCvY3XncTgRmVKS7l-Ns0KlBdOB5bTUGlM4LI8DswxjkapiK45svP4M7R9_NfHpgxjXuntL6G9nJyZGA2qgfiP8J1DU_Ysw=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/e4rVjqCFNh7XxFBcP3HH8iyBRFFJ-n8Ww8fy5nxUgAZ0S1nd9fxMb3zWG4amentzbkK8pTPKFZlqVtwtLbi6l5uQk4R4fD1Vao5VNmoBCH5qq-lA-Bt9J4nGvZNHiDmqHf2e18UtDA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/81t7cABFWQuIkFN2oO-NSp_NMQIkfKe66fqUH9FbMrTn9KdfKZr9PkcRsH2Rnz1nzwI_Fbl241OPDv2N6oaF5yyH-jUnjxRTg124iuzu2gqOI9-oZc53XJIyRu5gYnrbe16DUMc-tA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/9Gk9ItcrEerPpDax9-SNfYiRNWgwcndDdZoV4xaaOxNtmvM8RoTPZpdO9Q2mKKCWTOomUfoVoR_Bi0nVLvjEPkZpcagSF0jxec5SyARw9Pu19yu5cv1pmlXppAfXqSPgyR-Cm-xsqQ=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/4DBllBDaDB1yQCypn1MKfTzH6WB8n19sQ22e6hbVJiJaSv5Ybg35P2Qz6cGRz1tUNgbf3Cj9qxLnTKE_meTO6dITSZ397ORj6MWdIqu24mhSGxn5rNPWvjPhLJuEG22m_etl3g7ICQ=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/-KZXSps64ks7XBaujkfau-J7kJZp_vL_ylYofQtk2XXM3Z9-99dw0p3fFkqClmrDfcG8UQp4WikwBdowlzQ0ioIJKustF2-tKN0y42kz3eEKSbU2MingXEJckbg5M9XOkWE4oJtJtA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/1DfCJk5Jn7vXwupOch5WX1IxNQfSt9LTqgs20egLQWYApw1mu1sR0qX0sQkmnK561sWEFiJyctSpu6vFABQgKn0yyW_sR4_t5IP8EZRmVsNx2bk89qWtowkxvnNjpQg3L2pGaKwo1g=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/wQpbOugzqymMIpOLm3HzW61sSew4tQHJr5NAM289NVP4al1Dex4NAREaSsG7isFxY67lb0V5mG0yD6VhU4JKiKes9deOZm5MnBncq4Wfrt_-4lfaaysyIue9X9-5t6fLMOfOFIoMtw=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/2jsrS5EMLVwBad_jkS64OEqEHF8E1C4K6kpMvuApJ90O_SCb4gM1TJRUtrCL10acfciHfhD_SEcrUn6wNWMjZUbGs7c0IylBnr8jKbCmHpaP0vBHSasvba_194VE4yzlS5-Xgl3MYg=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/--wD0ObN7GvKZOlm_xLEftzkNqKvdYzX8S_hZ_VEPnfwe-mzyeEj_QQPdevLPBD_eaB8UdftWBnLdubahrWPFhaXq4vneH0pNnmZo3qmquhgYkb5HfhkxbYmI6-jH8D9ZuRSnml46A=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/m2ViVg9EpC47flQrnLd1YA4cbI8eOl8pgrwtl9uds1iUkrWizQhxBfXmwjoj81g24q22lmh78ISH8Ms1bcDS7ASwdQbPqcA3AKV2LTk03TB_ARtxlbzizLLLmRowyVYmHSgwBXVfZA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/vhbOCIQUnk7ayCjtOFsoE_c1fNwuKzYZWm4AXpSaEgJiYH54I8ErmOePG9v28Nm8d12MwVOMVQbMFCUwZmR2-vwUwFImc5a_1v6Z1YcC8FsVxWk_iagAabe8fnIOXvvm4gF6DZNfPg=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/8YbP7y7b1pVJTr9hlQP3fC4rd88On2ZR2CPCt36LvFEPeFiWX7ws9nqCtIkGx2L4QtnVE3R5o3jB4y0JW9S7My-Ur8wVMSUIvVfr3yPmyJ4MIcgp6I0DKUBcbRHHkSTCekeUYJqxog=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/yL56xyEh8ZwqFRsSfOeUl6eJ14dLRgiZntfw9uPSi9v9vZWao7XETm8ObjXbtO4dvkZPAJSDj3VcKSDgFhplvPYi7F4ZdqHOul9E_5n8Jog9GL4kg2uucV_z1mjqd1iAWp0nXJx80A=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/uwSmfDZxcOn8ctURRW4AdWKI-Wo3HRoBpstz62q10FfMoQDLIw_6fdDA4xRU0JXyAwq1Vn_HZZDHST-ijqbAx9jb40xNkVBkelA_3rFPtgNxxDJWIHZtyeQOXXnBhfZgFV8VJzujvA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/wsWY1jiiCvWdRJqd0-wtFPpPHoxOcjTnfpY7Z8CQAEEyFwF4ZJda2GxSxKGcHjZ4BqmgVTWmZ6SKUemURC3qzKVpLYrpjJGEDT7LIVNj8YAXxe-rA0uVo5aQ4BySO-2PzXhKna3W5g=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/RLu6QYJf9bRxYZf6PIr0dRpAfgR8U0aVW6rn1C6z2GRoTvX2TByVsCdMxNut4ejAV0sPEm5LGIsPRX8aZdau6AzLWtwbBekCPNjAywBDBx3qBppUsPxMKWmzHE9t5HsXb19K-Z-nZQ=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/6VwrydE2QGVzcC0hffybxQORJ8DJFt5UqSBN3HSqe6zx_Zl2pRObvLH03HvC5eeI6W2qN1ZBZ45MkWmjXhq8ifUYRO7b7KB4MAyL-VHa4gMvZL1oZJPiHBviwdacOyfOMa3Vv2uPtg=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/fGhlq97pIFDa5DIrWixt_AoyQr2U0fhkKutcxdQvj0tdKtI3oDBxF6uWAGY-ZAKfZyC8_RcSqxwxVM1LlpC4s7X1JSjHesCgXinR8PSeUvZW9q4UPyaZDZUoY9WCRQMPOvVbX3_MNA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/jRA5f_vxnJsINxBDwvxNPyQ73oKF1B16aDrdidw9oSAZc9dZrKloRG9fFy2NpUMY9RgynknB9ebPK3Jz-vjgPFot5xynDO-IMN70KPiaAS-5ZLtD5YlHfDfiUVA1IQMyAAx3z0vi6Q=m18" type="video/mp4"></object>
          <object data="https://lh3.googleusercontent.com/0taiMxIxnLPpLbuN_AGr-FQBA9htLR2WupMRAjhCSoPGNMSfHEbrMzSUR6cZShfNDFx4ccXGm0sUZeDHrR5eDZ4YFzGUc-1G58CpPmYvPdVjXOMUE9KGF0Yk62n9S_F3FG5cqGfbJg=m18" type="video/mp4"></object>
          <object data="https://lh3.googleusercontent.com/FklM7aBepqG6y7PebV4I8fbVtiRhCTV01qoMvMCiSfPmzR2hOpyzsgMQ8F-DSNlTeEy9IvaS6qfufNlPRv-eZd8JasPgbhRsBbIB0H1OTHE4VvkgO957_xOMWUPkmoxq88J1qAbnmw=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/Eqfk37eKIHl-ruyOI0lVJw6p6IACsPsk-TRhK0tcygKiq5975wPCe5SuavKxGM8EyqDX7vKJX8mjM8Q5zmb4OPUuakFtsh6KGKW0doWCRY4EnyQkyhVsCKIfSUNJnKQq1Ly0ofjU0g=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/QNf_Vog_RQ5B72Yfd1aXM-6zzWj-ianIOTal1p0uTvCO5YmCX_4LYF_g65ABiRYe_uX9teGOEfRfYSzcAsuFyiTcenij7LI2zVRhin8FFYtsYkvcXF2eeK9r4D__uC1CdBnX037PaQ=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/cF9bt2lpPdf76fsX8ySWYc_ufs2cbzKB1gam5Qw2y8_-cf4B7P4bR8ZgiYgOwbCQsINCncR5lPzrusrD7DcPIsBqIZWH4kxh6xI1vVLwky_ccIjC1OSamVOzy4IxOxv4Qecod7BK0A=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/XlAMA4N8cRslCA3Oq7G3pxNeW74ChOEMLL9V7zvetdMLrC_uk29DySCPyXhUEXSrhA_hiihOhIoJlTOUs3zPMV283y0G8FXtOt9XipHowYKRJwvkaytjN_mIrUmuZgSY7GCj4xANHQ=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/NV8fDdGDzixavfQO9ANfzoVQL4f4a2UobY1uVUx8kEIZe4ubTJEGeB-m7Ruwinyg29MVCgpUquN7a2bc4h_g-ArfHQX20mEV7xb1eie0nWqvmjkZpMuWsbqHW5joRn30Oqq0boGe5w=m18" type="video/mp4"></object>
          <object data="https://lh3.googleusercontent.com/KE6H_twhE22Kix76crJjWb0D-5ED28qHuKsPgCogpsJZ6UOjeobXTDNTlK_xAP_j7TTh8QOzwzD7PRJDfjYLoKzKZw-rfZqjVi0NqvFa6u0d-agV3jxx_UprrJvN4No6w_EWUYghog=m18" type="video/mp4"></object>
          <object data="https://lh3.googleusercontent.com/ZIOyh2afEb2yBDa7NmciOCMdPFxoWUkk4-EleCX_pFSYmcF-EmVZWu2sHsgkBfzuAy8bYT9cLluJCSyDY_qxGw9goDgnaxsr9h3X2k9Dg1ppcBkSC-AzMMvDQg4cR2X-2ggvPg1U3Q=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/nd-3DPHoj35wgkl0QhF9HEm0DTbskBEUjtLWdsrHpoN09SkZsl4ILOiYD5gyt6xJdhmkjWck-RzFsKm8TPaqnbi5S7Vvl0DK76sb93oBh_5EcAt7paJ1n5vrhbBpD4a3tePJplcS-Q=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/63Lef5SO6phA62Z5jYx3QLzItt1V7PaM5C2gPMwDTWM4tzTEBRNTLY9d50rhuKxmVOd1Y--7C3Q_LLB0tTYP9wq0fIRkDA3EHDXypQya34cIbLk-cLyeTVRXaqY4_C_RKyVqQdVCOQ=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/tPqTfQIZphKDxd889Vrp4rJN7eBYMrTqMJyFfEDjx5tMVj7KvoEfk19fUajYiEsHMSgrzOHr8ONZcFrlQI3T12o-Cc7pHQVbNx7tIfV1Ymhvuk8TktbkgqN9UxSnZGQZ-EKB5d7xIw=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/yuCg6WOzzsPTDg_lmbzNHJTSvKrBMywUEhu8cYSyZvaORsJNxP0CltXaipbdJr42ZRSRtl8S2K2EeiLaVHlEfgvh9omof97IPN1FFnOtwByDDW2wxA1fecnlbBvCp4bzRqUpZJHOXw=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/Mt2M1GIntTV2DzFapyxxfpTtRNtWCtI-0Rge4efG5iF7I9YbBt91pr_T7ug3QlGowO4Wh6kdLoVJfsR0Rxv8mJV9doTbAVKvmML3F7jyVIqOyEyupo31E1WAJj3V6-h7h9rLaV1Z-Q=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/UePNkSmT3phStt4cK4tzgj1liXx73bNuWmghn5EfljQsj3MRj12ODtfWxYLNG4pRq1bmipInHRemYROoyaPinToJPbWQ7SrW49VU_gF6xve3xZqVbpW_N89XSXVcbyOzVMqmpCKbjA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/S5dLl6X3DWFga0QrJTFZ-q0NtSrx2IVdPdnE0h4HF3cPbuyrVc_PeuYEwyu8Ayk5WYK5WYsNxYNVDH-vf7BGRRpVitVycN68ooqHr-Hn4NsTTOaHYdfLxvceLCl1ebSW0d7VFtINXA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/gbxbjTbDRhTYxFta1F6dKCEQhC1C5WV7PVZH2tPqT34ZnodMUgdWaM2z_u63rJhWjNBc9_Grujf4AaIrmUoYu97buvY1qLMyBqkuquJBOEHZ8VQ9IvRwa7zbt6noPKgAZ1r8-a3PaA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/_X5kHHMcpmA2giChB058dvTpLoJ9eR4QDBRkCiIqDc1ciZnEoq39jR4mY081yqyIfPfwNkw0B7joFFxTsMNMYUojEakp9O6OzJ8hf1O0BiEkEOrIQTpFs4AQT96zhdxUmhOcdmc2Lw=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/BwvCdv-DK9gneI7nmyqpDnsbwNmYBf58zCfixnr5bW3Rgt4Jh9Jkc91HPakGxkW_w46H7rYBEgrVn4RrR8IdnkOrAYeahuZg5OzvRQ8F8fFTa4T20elH9JzNF3-4neIzYlusTOWdSw=w1920-h1080"></object>
        </div>
      </div>
    </div>
  );
}

export default PicturePage;