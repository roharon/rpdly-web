import { AtlassianNavigation } from '@atlaskit/atlassian-navigation';
import { TopNavigation } from '@atlaskit/page-layout';
import { AtlassianIcon } from '@atlaskit/logo';
import NavPrimaryButton from './NavPrimaryButton';
import NavAvatar from './NavAvatar';

const NavBar = () => (
    <TopNavigation
        id="product-navigation"
        skipLinkTitle="Product Navigation"
        height={60}
        isFixed={false}
    >
        <AtlassianNavigation
            label="site"
            primaryItems={[
                <NavPrimaryButton name="Issues" />,
                <NavPrimaryButton name="Explore" />,
            ]}
            renderProductHome={AtlassianIcon}
            renderProfile={NavAvatar}
        />
    </TopNavigation>
);

export default NavBar;
