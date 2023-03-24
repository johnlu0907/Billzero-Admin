import React from 'react'
import {
    HiOutlineColorSwatch,
    HiOutlineDesktopComputer,
    HiOutlineTemplate,
    HiOutlineViewGridAdd,
    HiOutlineHome,
    HiOutlineUser,
    HiOutlineViewList,
    HiOutlineCreditCard,
    HiOutlinePlay,
    HiOutlineSearch,
    HiOutlineUserGroup,
    HiOutlineCog,
} from 'react-icons/hi'

import {
    FaObjectGroup,
    FaHospital,
} from 'react-icons/fa'

const navigationIcon = {
    home: <HiOutlineHome />,
    user: <HiOutlineUser />,
    view: <HiOutlineViewList />,
    creditCard: <HiOutlineCreditCard />,
    play: <HiOutlinePlay />,
    search: <HiOutlineSearch />,
    users: <HiOutlineUserGroup />,
    setting: <HiOutlineCog />,
    system: <FaObjectGroup />,
    hospital: <FaHospital />,
    singleMenu: <HiOutlineViewGridAdd />,
    collapseMenu: <HiOutlineTemplate />,
    groupSingleMenu: <HiOutlineDesktopComputer />,
    groupCollapseMenu: <HiOutlineColorSwatch />,
}

export default navigationIcon
