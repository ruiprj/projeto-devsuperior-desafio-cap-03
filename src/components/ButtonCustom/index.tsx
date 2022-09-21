import './styles.css';

type Props = {
    text: string;
    width: string;
}

const ButtonCustom = ({ text, width }: Props) => {
    return (
        <div className="btn-container">
            <button className="btn  btn-primary  btn-custom" style={{width: `${width}`}} >
                <h6>{ text }</h6>
            </button>
        </div>
    )
}

export default ButtonCustom;
