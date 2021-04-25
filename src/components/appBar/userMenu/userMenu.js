const UserMenu = ({ name, onLogout, isloading }) => (
  <>
    {!isloading && (
      <div>
        <img
          src="https://hsto.org/getpro/habr/avatars/24c/f8f/285/24cf8f2859fb317b5a67d55a1e031ada.png"
          alt="1"
          width="32"
        />
        <span>Welcom,{name}</span>
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
    )}
  </>
);

export default UserMenu;
