// ========== DataTable
// import all modules
import React, { Component, Fragment } from 'react';
import { FaEdit, FaTrash, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import getQuery from '../../helpers/getQuery';

// import styles 
import styled from './style.module.scss';

class DataTableComponent extends Component {
	constructor(props) {
		super(props)

		this.state = {
			page: Number(getQuery(this.props.location.search, 'page') || 1),
			totalPage: 10,
			offset: 0
		}

		this.handleNextPrevPage = this.handleNextPrevPage.bind(this);
	}

	handleNextPrevPage(name) {
		this.setState(currentState => {
			switch(name) {
				case 'NEXT' : {
					return {
						offset: currentState.offset + 5
					}
				}

				default : {
					return {
						offset: currentState.offset - 5
					}
				}
			}
		})
	}

	render() {
		return (
			<Fragment>
				<div className={styled['data-table']}>
					<div className={styled['table-container']}>
						<table className={styled.table}>
							<thead className={styled.thead}>
								<tr>
									<th className={styled['col-number']}>No</th>
									<th className={styled['col-student-name']}>Student Name</th>
									<th className={styled['col-nisn']}>NISN</th>
									<th className={styled['col-class']}>Class</th>
									<th className={styled['col-birthday']}>Birthday</th>
									<th className={styled['col-photo']}>Photo</th>
									<th className={styled['col-report']}>Report</th>
									<th className={styled['col-action']}>Action</th>
								</tr>
							</thead>
							<tbody className={styled.tbody}>
								{
									this.props.student.students.map((item, index) => (
										<Fragment key={String(index)}>
											<tr>
												<td className={styled['col-number']}>{ item.id }</td>
												<td className={styled['col-student-name']}>{ item.student_name }</td>
												<td className={styled['col-nisn']}>{ item.nisn }</td>
												<td className={styled['col-class']}>{ item.class }</td>
												<td className={styled['col-birthday']}>{ item.birthday }</td>
												<td className={styled['col-photo']}>
													<Link 
														to={item.photo}
														className={styled.link}
														target="_blank"
													>
														See Photo
													</Link>
												</td>
												<td className={styled['col-report']}>
													<Link 
														to={item.report}
														className={styled.link}
													>
														Download
													</Link>
												</td>
												<td className={styled['col-action']}>
													<span className={`${styled['span-icon']} ${styled.edit}`}>
														<FaEdit className={styled.icon} />
														Edit
													</span>
													<span className={`${styled['span-icon']} ${styled.delete}`}>
														<FaTrash className={styled.icon} />
														Delete
													</span>
												</td>
											</tr>
										</Fragment>
									))
								}
							</tbody>
						</table>
					</div>
					<div className={styled['pagination-container']}>
						<ul>
							{
								(this.state.page > this.state.totalPage) ? (
									<li className={styled.pagination} onClick={() => this.handleNextPrevPage('PREV')}>
										<FaChevronLeft />
									</li>
								) : (
									<li className={styled.pagination}>
										<FaChevronLeft />
									</li>
								)
							}
							{
								[...Array(5)].map((item, index) => (
									(this.state.page === (index + 1 + this.state.offset)) ? (
										<Fragment key={String(index)}>
											<li className={`${styled.pagination} ${styled.active}`}>
												{ (index + 1 + this.state.offset) }
											</li>
										</Fragment>
									) : (
										<Fragment key={String(index)}>
											<li className={styled.pagination}>
												{ (index + 1 + this.state.offset) }
											</li>
										</Fragment>
									)
								))
							}
							{
								(this.state.page < this.state.totalPage) ? (
									<li className={styled.pagination} onClick={() => this.handleNextPrevPage('NEXT')}>
										<FaChevronRight />
									</li>
								) : (
									<li className={styled.pagination}>
										<FaChevronRight />
									</li>
								)
							}
						</ul>
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (currentState) => ({
	...currentState
})

export const DataTable = connect(mapStateToProps, null)(DataTableComponent)