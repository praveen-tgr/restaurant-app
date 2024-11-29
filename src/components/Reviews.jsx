import React from "react";
import { Card, CardBody, CardText, CardFooter, CardTitle } from "react-bootstrap";
import "./Reviews.css";
import Person1 from '../utils/img/review1.jpg';
import Person2 from '../utils/img/review2.jpg';
import Person3 from '../utils/img/review3.jpg';
import Person4 from '../utils/img/review4.jpg';


export function Reviews() {
    return (
        <div className="reviews-section container">
            <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
            <div className="row g-4">
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    I was truly impressed by Hungry Zone. The ambiance was warm and inviting, perfectly complementing the flavorful dishes that showcase an incredible attention to detail. Every bite reflected the passion and dedication of the team behind this establishment. Hungry Zone is more than just a restaurant; it’s a celebration of food and togetherness.
                                    My best wishes to the team for continued success. Keep delighting food lovers! #vidamuyarchi
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center"><img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle>Ajith Kumar</CardTitle>
                        </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>"Hungry Zone is a delightful place where food meets love and passion. Every dish is flavorful and crafted with care, making it a memorable experience. The cozy ambiance adds to the charm, making you feel at home. I truly enjoyed my time here and can’t wait to visit again.
                                    Best wishes to the team for continued success!"
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center"><img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle>Sai Pallavi</CardTitle>
                        </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    "Hungry Zone delivers a knockout experience! The food is flavorful, fresh, and packed with quality that hits all the right notes. The atmosphere is welcoming and energizing, making it a perfect spot to relax and enjoy a great meal.
                                    I was truly impressed by the passion behind every dish. Keep up the fantastic work!"
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center"><img src={Person3} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle>John Cena</CardTitle>
                        </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Hungry Zone is a hidden gem! The food is absolutely delicious, with every dish showcasing incredible flavors and quality. The atmosphere is warm and inviting, making it the perfect place to enjoy a great meal with friends and family. I loved every moment of my visit and highly recommend it.
                                    Best wishes to the team for continued success!
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center"><img src={Person4} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle>Priya bhavanishankar</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}