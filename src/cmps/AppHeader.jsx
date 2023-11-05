
import { Avatar, IconButton } from "monday-ui-react-core";
import { Switcher, Notifications, Inbox, Invite, Apps, Search, Help } from "/node_modules/monday-ui-react-core/src/components/Icon/Icons"
import { MsgModalSuccess } from "./MsgModalSuccess";
import { useNavigate } from "react-router";
import { login, logout, signup } from '../store/actions/user.action';
import { userService } from "../services/user.service";

export function AppHeader({ user }) {

    const navigate = useNavigate()

    const defaultUser = userService.getDefaultUser()

    return (
        <section className="app-header flex justify-between align-center">
            <section className="flex align-center">
                <IconButton className="switcher-btn" icon={Switcher} kind={IconButton.kinds.TERTIARY} onClick={() => navigate('/#')} />
                <p onClick={() => navigate('/board')} className="logo"><span>mondify</span> work management</p>
            </section>
            <section className="flex justify-center align-center  gap4">
                <IconButton
                    icon={Notifications}
                    kind={IconButton.kinds.TERTIARY}
                    ariaLabel="Notifications"
                    onClick={() => login({ username: 'Danielol' })} />
                <IconButton
                    icon={Inbox}
                    kind={IconButton.kinds.TERTIARY}
                    ariaLabel="Inbox"
                    onClick={() => logout()} />
                <IconButton
                    icon={Invite}
                    kind={IconButton.kinds.TERTIARY}
                    ariaLabel="Invite Members"
                    onClick={() => signup({ username: 'Danielol', password: 123456, fullname: 'Daniel Avishid' })} />
                <IconButton
                    icon={Apps}
                    kind={IconButton.kinds.TERTIARY}
                    ariaLabel="Apps"
                    className="apps-icon" />
                <IconButton
                    icon={Search}
                    kind={IconButton.kinds.TERTIARY}
                    ariaLabel="Search Everything"
                    className='search-btn' />
                <IconButton
                    icon={Help}
                    kind={IconButton.kinds.TERTIARY}
                    ariaLabel="Help" />
                <button className="avatar-btn">
                    <img
                        className='logo-img'
                        src={'https://cdn.monday.com/images/logos/monday_logo_icon.png'} />
                    <Avatar
                        className='avatar'
                        size="medium"
                        src={user ? user.imgUrl : defaultUser.imgUrl}
                        type="img"
                    />
                </button>
            </section>
            <MsgModalSuccess />
        </section>
    )
}