import {Col, Form, Row, Stack} from "react-bootstrap";
import CreatableSelect from "react-select/creatable";

export function NoteForm() {
    return <Form>
        <Stack gap={3}>
            <Row>
                <Col>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="tags">
                        <Form.Label>Tags</Form.Label>
                        <CreatableSelect isMulti />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="markdown">
                <Form.Label>Body</Form.Label>
                <Form.Control required as="textarea" rows={15}/>
            </Form.Group>
        </Stack>
    </Form>
}