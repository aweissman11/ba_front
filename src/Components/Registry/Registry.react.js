import React, { useEffect } from 'react';

// Styles
import { OuterOutline, InnerOutline } from '../Shared/Styles/Shared.styled';
import { RegistryWrapper } from './Registry.styled';

const Registry = () => {
  useEffect(() => {
    let scriptTag = document.createElement('script');
    let wrapper = document.querySelector('#registry-wrapper');
    scriptTag.id = 'zola-wjs';
    scriptTag.async = !0;
    scriptTag.src="https://widget.zola.com/js/widget.js";
    wrapper.parentNode.insertBefore(scriptTag, wrapper);
  }, [])

  return (
    <div className='events-page'>
      <OuterOutline>
        <InnerOutline extraPadding='40px' >
          <a class="zola-registry-embed" href="https://www.zola.com/registry/chelseyandaaronsbigadventure" data-registry-key="chelseyandaaronsbigadventure">Our Zola Wedding Registry</a>
          <RegistryWrapper id='registry-wrapper' />
        </InnerOutline>
      </OuterOutline>
    </div>
  );
}

export default Registry;