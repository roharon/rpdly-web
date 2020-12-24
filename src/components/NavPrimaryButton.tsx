import Button from '@atlaskit/button';
import './NavPrimaryButton.scss';

const NavPrimaryButton = (props: any) => (
    <Button appearance="subtle" id="primary-item">
        {props.name}
    </Button>
);

export default NavPrimaryButton;
