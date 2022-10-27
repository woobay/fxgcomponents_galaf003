import { Dropdown as DropdownAntD, Menu} from 'antd';
import PropTypes from 'prop-types';
import { DownOutlined } from '@ant-design/icons';


export const Dropdown = ({trigger, text}) => {

    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              1st menu item
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
              2nd menu item
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
              3rd menu item
            </a>
          </Menu.Item>
          <Menu.Item danger>a danger item</Menu.Item>
        </Menu>
      )


    return (
        <>
        <DropdownAntD overlay={menu} trigger={trigger}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          {text} <DownOutlined />
        </a>
      </DropdownAntD>
      </>
      )
}

Dropdown.propTypes = {
    trigger: PropTypes.string,
    text: PropTypes.string,
};
