import {useNote} from "./NoteLayout.tsx";
import {Badge, Button, Col, Row, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";

export function Note() {
    const note = useNote()

    return <>
        <Row className="align-items-center mb-4">
            <Col>
                <h1>{note.title}</h1>
                {note.tags.length > 0 && (
                    <Stack gap={2} className="h-100">
                        {
                            note.tags.length > 0 &&
                            ( <Stack gap={1} direction="horizontal" className="flex-wrap">
                                { note.tags.map(tag => ( <Badge key={tag.id} className="text-truncate">{ tag.label }</Badge> )) }
                            </Stack> )
                        }
                    </Stack>
                )}
            </Col>
            <Col xs={'auto'}>
                <Stack gap={2} direction="horizontal">
                    <Link to={`${note.id}/edit`}>
                        <Button variant='primary'>Edit</Button>
                    </Link>
                    <Button variant="outline-danger">Delete</Button>
                    <Link to={`/`}>
                        <Button variant="outline-secondary">Back</Button>
                    </Link>
                </Stack>
            </Col>
        </Row>
    </>
}