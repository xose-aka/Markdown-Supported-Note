import {Button, Col, Form, Row, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import {v4 as uuidV4} from "uuid";
import {useState} from "react";
import {Tag} from "../App.tsx";
import ReactSelect from "react-select";

type NoteListProps = {
    availableTags: Tag[]
}

export function NoteList({ availableTags }: NoteListProps) {

    const [selectedTags, setSelectedTags] = useState<Tag[]>([])
    const [title, setTitle] = useState("")

    return (<>
        <Row className="align-items-center mb-4">
            <Col>
                <h1>Notes</h1>
            </Col>
            <Col xs={'auto'}>
                <Stack gap={2} direction="horizontal">
                    <Link to="/new">
                        <Button variant='primary'>Create</Button>
                    </Link>
                    <Button variant="outline-secondary">Edit Tags</Button>
                </Stack>
            </Col>
        </Row>
        <Form>
            <Row className="mb-4">
                <Col>
                    <Form.Group controlId="title">
                        <Form.Label>
                            Title
                        </Form.Label>
                        <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value) }></Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="tags">
                        <Form.Label>Tags</Form.Label>
                        <ReactSelect
                            options={availableTags.map(tag => {
                                return { label: tag.label, value: tag.id }
                            })}
                            onChange={tags => {
                                setSelectedTags(
                                    tags.map(tag => {
                                        return { label: tag.label, id: tag.value }
                                    })
                                )
                            }}
                            value={selectedTags.map( tag => {
                                return { label: tag.label, value: tag.id }
                            } )} isMulti />
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    </>)
}