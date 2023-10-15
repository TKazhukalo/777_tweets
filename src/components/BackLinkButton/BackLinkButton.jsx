import { useNavigate } from "react-router-dom";
import { ArrowCircle, Button } from "./BackLinkButton.styled";

export const BackLinkButton = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Button
                onClick={() => {
                    navigate("/", { replace: true });
            }}>
                <ArrowCircle />
            </Button>
</div>
    );
};