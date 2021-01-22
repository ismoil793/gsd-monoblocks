import SideMenu from './SideMenu';
import Orders from './Orders';

const Cabinet = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <SideMenu />
      <Orders />
    </div>
  );
};

export default Cabinet;
