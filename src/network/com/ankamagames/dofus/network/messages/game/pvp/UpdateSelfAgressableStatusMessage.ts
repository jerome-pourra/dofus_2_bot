import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class UpdateSelfAgressableStatusMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5808;

	public status: number = 0;
	public probationTime: number = 0;
	public roleAvAId: number = 0;
	public pictoScore: number = 0;

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
        this.deserializeAs_UpdateSelfAgressableStatusMessage(input);
    }

    private deserializeAs_UpdateSelfAgressableStatusMessage(input: ICustomDataInput)
    {
        this._statusFunc(input);
        this._probationTimeFunc(input);
        this._roleAvAIdFunc(input);
        this._pictoScoreFunc(input);
    }

    private _statusFunc(input: ICustomDataInput)
    {
        this.status = input.readByte();
        if(this.status < 0)
        {
            throw new Error("Forbidden value (" + this.status + ") on element of UpdateSelfAgressableStatusMessage.status.");
        }
    }

    private _probationTimeFunc(input: ICustomDataInput)
    {
        this.probationTime = input.readDouble();
        if(this.probationTime < 0 || this.probationTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.probationTime + ") on element of UpdateSelfAgressableStatusMessage.probationTime.");
        }
    }

    private _roleAvAIdFunc(input: ICustomDataInput)
    {
        this.roleAvAId = input.readInt();
    }

    private _pictoScoreFunc(input: ICustomDataInput)
    {
        this.pictoScore = input.readInt();
    }

}