import { MapCoordinates } from "./../../../../types/game/context/MapCoordinates";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { CompassUpdateMessage } from "./CompassUpdateMessage";

export class CompassUpdatePvpSeekMessage extends CompassUpdateMessage
{

	public static readonly protocolId: number = 4778;

	public memberId: number = 0;
	public memberName: string = "";

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CompassUpdatePvpSeekMessage(input);
    }

    private deserializeAs_CompassUpdatePvpSeekMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._memberIdFunc(input);
        this._memberNameFunc(input);
    }

    private _memberIdFunc(input: ICustomDataInput)
    {
        this.memberId = input.readVarUhLong();
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element of CompassUpdatePvpSeekMessage.memberId.");
        }
    }

    private _memberNameFunc(input: ICustomDataInput)
    {
        this.memberName = input.readUTF();
    }

}