export default class AddBoardMemberCommand {
  constructor(
    readonly boardId: string,
    readonly targetUserId: string,
    readonly role: string,
    readonly requesterUserId: string
  ) {}
}
