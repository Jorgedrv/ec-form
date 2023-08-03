import { Spinner, Button } from "react-bootstrap";

const SpinnerButton = ({ spinner, children }) => {

    return (
        spinner ?
            <Button variant="primary" type="submit" disabled={spinner}>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
            </Button> :
            <Button variant="primary" type="submit" disabled={spinner}>{children}</Button>
    );
}

export default SpinnerButton;