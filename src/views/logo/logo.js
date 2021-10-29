// import logoImg from '../../assets/logo2.png'
const Logo = ({img}) => {
  return (
    <div  className="logo-wrapper">
      <img data-testid="logo" src={img} alt="logo" />
    </div>
  )
}

export default Logo;