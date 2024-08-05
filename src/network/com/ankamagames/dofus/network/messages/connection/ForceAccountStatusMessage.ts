import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ForceAccountStatusMessage extends NetworkMessage
{

	public static readonly protocolId: number = 25;

	public force: boolean = false;
	public forcedAccountId: number = 0;
	public forcedNickname: string = "";
	public forcedTag: string = "";

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
        this.deserializeAs_ForceAccountStatusMessage(input);
    }

    private deserializeAs_ForceAccountStatusMessage(input: ICustomDataInput)
    {
        this._forceFunc(input);
        this._forcedAccountIdFunc(input);
        this._forcedNicknameFunc(input);
        this._forcedTagFunc(input);
    }

    private _forceFunc(input: ICustomDataInput)
    {
        this.force = input.readBoolean();
    }

    private _forcedAccountIdFunc(input: ICustomDataInput)
    {
        this.forcedAccountId = input.readInt();
        if(this.forcedAccountId < 0)
        {
            throw new Error("Forbidden value (" + this.forcedAccountId + ") on element of ForceAccountStatusMessage.forcedAccountId.");
        }
    }

    private _forcedNicknameFunc(input: ICustomDataInput)
    {
        this.forcedNickname = input.readUTF();
    }

    private _forcedTagFunc(input: ICustomDataInput)
    {
        this.forcedTag = input.readUTF();
    }

}